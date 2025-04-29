"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Keyboard, MousePointer, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type GridCell = {
  id: number
  x: number
  y: number
  width: number
  height: number
  active: boolean
}

type GridLevel = {
  cells: GridCell[]
  activeCell: number | null
}

export default function MouselessDemo() {
  const [isActive, setIsActive] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 })
  const [gridLevels, setGridLevels] = useState<GridLevel[]>([])
  const [currentLevel, setCurrentLevel] = useState(0)
  const [showInstructions, setShowInstructions] = useState(true)
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null)
  const demoRef = useRef<HTMLDivElement>(null)
  const [demoSize, setDemoSize] = useState({ width: 0, height: 0 })

  // Initialize the first grid level
  const initializeGrid = useCallback(() => {
    const demoElement = demoRef.current
    if (!demoElement) return

    const { width, height } = demoElement.getBoundingClientRect()
    setDemoSize({ width, height })

    // Create a 3x3 grid for the first level
    const cells: GridCell[] = []
    const cellWidth = width / 3
    const cellHeight = height / 3

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        cells.push({
          id: y * 3 + x,
          x: x * cellWidth,
          y: y * cellHeight,
          width: cellWidth,
          height: cellHeight,
          active: false,
        })
      }
    }

    setGridLevels([{ cells, activeCell: null }])
    setCursorPosition({ x: width / 2, y: height / 2 })
  }, [])

  useEffect(() => {
    initializeGrid()

    const handleResize = () => {
      initializeGrid()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [initializeGrid])

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isActive) return

      e.preventDefault()

      const currentLevelData = gridLevels[currentLevel]
      if (!currentLevelData) return

      // If no cell is active yet, activate the center cell (4)
      if (currentLevelData.activeCell === null) {
        const updatedLevels = [...gridLevels]
        updatedLevels[currentLevel] = {
          ...currentLevelData,
          activeCell: 4,
        }
        setGridLevels(updatedLevels)
        return
      }

      const keyActions: Record<string, () => void> = {
        j: () => moveSelection("left"),
        l: () => moveSelection("right"),
        i: () => moveSelection("up"),
        k: () => moveSelection("down"),
        Enter: () => performClick(),
        Escape: () => resetDemo(),
        z: () => zoomIn(),
      }

      if (keyActions[e.key]) {
        keyActions[e.key]()
      }
    },
    [isActive, gridLevels, currentLevel],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Move the selection in the specified direction
  const moveSelection = (direction: "left" | "right" | "up" | "down") => {
    const currentLevelData = gridLevels[currentLevel]
    if (!currentLevelData || currentLevelData.activeCell === null) return

    const activeCell = currentLevelData.activeCell
    const row = Math.floor(activeCell / 3)
    const col = activeCell % 3

    let newRow = row
    let newCol = col

    switch (direction) {
      case "left":
        newCol = Math.max(0, col - 1)
        break
      case "right":
        newCol = Math.min(2, col + 1)
        break
      case "up":
        newRow = Math.max(0, row - 1)
        break
      case "down":
        newRow = Math.min(2, row + 1)
        break
    }

    const newActiveCell = newRow * 3 + newCol

    if (newActiveCell !== activeCell) {
      const updatedLevels = [...gridLevels]
      updatedLevels[currentLevel] = {
        ...currentLevelData,
        activeCell: newActiveCell,
      }
      setGridLevels(updatedLevels)

      // Update cursor position
      const cell = currentLevelData.cells[newActiveCell]
      setCursorPosition({
        x: cell.x + cell.width / 2,
        y: cell.y + cell.height / 2,
      })
    }
  }

  // Zoom in to create a new grid level
  const zoomIn = () => {
    const currentLevelData = gridLevels[currentLevel]
    if (!currentLevelData || currentLevelData.activeCell === null) return

    const activeCell = currentLevelData.cells[currentLevelData.activeCell]

    // Create a new 3x3 grid within the active cell
    const cells: GridCell[] = []
    const cellWidth = activeCell.width / 3
    const cellHeight = activeCell.height / 3

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        cells.push({
          id: y * 3 + x,
          x: activeCell.x + x * cellWidth,
          y: activeCell.y + y * cellHeight,
          width: cellWidth,
          height: cellHeight,
          active: false,
        })
      }
    }

    const newLevel: GridLevel = { cells, activeCell: null }
    const updatedLevels = [...gridLevels.slice(0, currentLevel + 1), newLevel]

    setGridLevels(updatedLevels)
    setCurrentLevel(currentLevel + 1)
  }

  // Perform a click at the current cursor position
  const performClick = () => {
    setClickPosition({ ...cursorPosition })

    // Clear the click animation after a short delay
    setTimeout(() => {
      setClickPosition(null)
    }, 500)
  }

  // Reset the demo
  const resetDemo = () => {
    setIsActive(false)
    setCurrentLevel(0)
    setGridLevels((prevLevels) => [prevLevels[0]])
    const firstLevel = gridLevels[0]
    if (firstLevel) {
      firstLevel.activeCell = null
    }
    setCursorPosition({ x: demoSize.width / 2, y: demoSize.height / 2 })
  }

  // Activate the demo
  const activateDemo = () => {
    setIsActive(true)
    setShowInstructions(false)
    initializeGrid()
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        ref={demoRef}
        className="relative aspect-video bg-stone-900/80 rounded-lg border border-stone-600 overflow-hidden"
      >
        {/* Demo content - a mock desktop */}
        <div className="absolute inset-0 p-4">
          <div className="grid grid-cols-4 gap-4 h-full">
            <div className="col-span-1 space-y-4">
              <div className="h-16 bg-stone-800/60 rounded-md border border-stone-700"></div>
              <div className="h-16 bg-stone-800/60 rounded-md border border-stone-700"></div>
              <div className="h-16 bg-stone-800/60 rounded-md border border-stone-700"></div>
            </div>
            <div className="col-span-3 bg-stone-800/60 rounded-md border border-stone-700 p-3">
              <div className="h-8 bg-stone-700/60 rounded-md mb-3"></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-20 bg-stone-700/60 rounded-md"></div>
                <div className="h-20 bg-stone-700/60 rounded-md"></div>
                <div className="h-20 bg-stone-700/60 rounded-md"></div>
                <div className="h-20 bg-stone-700/60 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid overlay */}
        {isActive && (
          <div className="absolute inset-0 bg-black/40">
            {gridLevels[currentLevel]?.cells.map((cell, index) => {
              const isActive = index === gridLevels[currentLevel]?.activeCell
              return (
                <div
                  key={`${currentLevel}-${index}`}
                  className={`absolute border ${isActive ? "border-primary bg-primary/20" : "border-white/30"}`}
                  style={{
                    left: cell.x,
                    top: cell.y,
                    width: cell.width,
                    height: cell.height,
                  }}
                >
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-primary text-xs font-mono">Level {currentLevel + 1}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Cursor */}
        <div
          className="absolute w-6 h-6 pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: cursorPosition.x - 12,
            top: cursorPosition.y - 12,
          }}
        >
          <MousePointer className="w-6 h-6 text-primary" />
        </div>

        {/* Click animation */}
        {clickPosition && (
          <div
            className="absolute w-8 h-8 pointer-events-none animate-ping"
            style={{
              left: clickPosition.x - 16,
              top: clickPosition.y - 16,
            }}
          >
            <div className="w-full h-full rounded-full bg-primary/50"></div>
          </div>
        )}

        {/* Instructions overlay */}
        {showInstructions && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <div className="text-center p-6 max-w-md">
              <Keyboard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Grid Navigation Demo</h3>
              <p className="text-stone-300 mb-6">
                Experience how mouseless navigation works. Use keyboard keys to move the cursor and perform actions.
              </p>
              <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto mb-6">
                <div className="h-10"></div>
                <div className="h-10 border border-stone-600 rounded flex items-center justify-center bg-stone-700/50">
                  I
                </div>
                <div className="h-10"></div>
                <div className="h-10 border border-stone-600 rounded flex items-center justify-center bg-stone-700/50">
                  J
                </div>
                <div className="h-10 border border-stone-600 rounded flex items-center justify-center bg-stone-700/50">
                  K
                </div>
                <div className="h-10 border border-stone-600 rounded flex items-center justify-center bg-stone-700/50">
                  L
                </div>
              </div>
              <div className="space-y-2 text-sm text-stone-400 mb-6">
                <p>
                  Press <span className="font-mono bg-stone-800 px-1 rounded">J K L I</span> to navigate the grid
                </p>
                <p>
                  Press <span className="font-mono bg-stone-800 px-1 rounded">Z</span> to zoom in for precision
                </p>
                <p>
                  Press <span className="font-mono bg-stone-800 px-1 rounded">Enter</span> to click
                </p>
                <p>
                  Press <span className="font-mono bg-stone-800 px-1 rounded">Esc</span> to reset
                </p>
              </div>
              <Button onClick={activateDemo} className="mx-auto">
                Start Demo
              </Button>
            </div>
          </div>
        )}

        {/* Controls */}
        {isActive && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button size="sm" variant="outline" onClick={zoomIn} className="bg-stone-800/80">
              <Plus className="w-4 h-4 mr-1" /> Zoom
            </Button>
            <Button size="sm" variant="outline" onClick={resetDemo} className="bg-stone-800/80">
              <X className="w-4 h-4 mr-1" /> Reset
            </Button>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 bg-stone-800/70 backdrop-blur-sm border border-stone-600 rounded-lg p-4">
        <h3 className="font-medium text-white mb-3">How Grid Navigation Works</h3>
        <ol className="space-y-3 text-stone-300 list-decimal pl-5">
          <li>
            <span className="text-white font-medium">Activate Grid:</span> Press Alt+Space (in this demo, click "Start
            Demo")
          </li>
          <li>
            <span className="text-white font-medium">Navigate Grid:</span> Use J (left), K (down), L (right), and I (up)
            to move between grid sections
          </li>
          <li>
            <span className="text-white font-medium">Zoom for Precision:</span> Press Z to zoom into the current grid
            section for more precise positioning
          </li>
          <li>
            <span className="text-white font-medium">Perform Actions:</span> Press Enter for left-click, Shift+Enter for
            right-click
          </li>
          <li>
            <span className="text-white font-medium">Exit Grid Mode:</span> Press Esc to exit grid navigation mode
          </li>
        </ol>
        <p className="mt-4 text-stone-400 text-sm">
          This demo simulates the core functionality of mouseless navigation. The actual application offers additional
          features like drag operations, scrolling, and customizable shortcuts.
        </p>
      </div>
    </div>
  )
}
