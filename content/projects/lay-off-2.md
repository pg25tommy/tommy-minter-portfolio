---
version: 2.0
owner: Tommy Minter
status: Active
---

# Lay-Off 2.0 — Project Specification

## Project Summary
Lay-Off 2.0 is the next evolution of our original student project Lay-Off, rebuilt with a stronger design vision and modern technical foundations. It&apos;s a 3D, third-person, 4-player competitive multiplayer game set inside a corporate office turned hostile. Players explore the environment, collect keycards, manage an energy economy, and place traps inside everyday office props to outmaneuver their opponents.

The goal is simple: escape with enough keycards or survive long enough to be the last one standing when the facility goes into meltdown. The gameplay blends strategy, stealth, and tension, turning a familiar office setting into something unpredictable and dangerous.

---

## Roles
- Engineer
- Game Designer

---

## Technologies
- **Engine**: Unity 2023.x
- **Networking**: Mirror 96.8.1
- **Server**: Unity Game Services (UGS)
- **Rendering**: URP
- **Platform**: PC
- **Deployment**: Headless dedicated builds

---

## Technical Architecture

The multiplayer experience is built on modern networking architecture using Unity and Mirror, supporting dedicated server builds and authoritative gameplay logic. The trap system is fully modular, allowing different archetypes such as slows, damage-over-time effects, and burst-damage traps.

Keycards drive the main progression loop, with energy-based trap placement creating a natural economy for strategy and movement.

---

## Gameplay Mechanics

The world is presented as a sprawling office filled with interactable props, each of which can hide deadly traps. Players must constantly weigh risk and reward as they move through the environment, deciding when to gather resources, when to ambush competitors, and when to make a run for the exit.

**Core Systems:**
- Energy economy for trap placement
- Keycard collection and escape mechanics
- Modular trap archetypes (slows, DoT, burst damage)
- Hostile office environment with interactive props
- Meltdown timer for endgame tension

---

## Development Status

The project is currently in active development under the codename **Project Umbrella**. Core systems, multiplayer integration, movement, and trapping mechanics are functional.

**Next Steps:**
- Additional level polish
- Expanded trap types
- UI refinement
- Visual enhancements

---

## Links
- [GitHub Repository](https://github.com/BorrowedUmbrella/ProjectUmbrella)

---

## Photos
*(Add gameplay screenshots, trap demos, office environment shots, multiplayer action)*
