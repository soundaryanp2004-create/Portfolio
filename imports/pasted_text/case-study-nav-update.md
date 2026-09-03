IMPORTANT — UPDATE ONLY THE BOTTOM NAVIGATION OF THE CASE STUDY PAGES.

Do NOT redesign the case-study pages.

The existing case-study design, content, typography, colors, sections, images, spacing and storytelling must remain unchanged.

I only want to improve the navigation at the VERY END of each case-study page.

==================================================
1. NEXT PROJECT NAVIGATION — ONLY AT THE VERY END
==================================================

At the bottom of every case-study page, add a beautiful "Next project" navigation.

IMPORTANT:

The Next Project navigation must NOT be visible throughout the page.

It must NOT be permanently displayed at the bottom of the viewport.

It must NOT float while the user is reading the case study.

It must NOT appear as a sticky element during normal scrolling.

The user should see it ONLY after reaching the END of the case-study content.

In other words:

User opens case study
↓
Reads and scrolls normally
↓
All existing case-study sections
↓
Reaches the very last section/content
↓
Only then the Next Project navigation appears
↓
User can click the button/card to move to the next case study

==================================================
2. BOTTOM NAVIGATION DESIGN
==================================================

Make the bottom navigation visually polished and consistent with the existing portfolio.

Use a simple two-sided navigation layout where appropriate:

LEFT:
"← Previous project"

RIGHT:
"Next project →"

However, do NOT show Previous project if the current project is the first case study and there is no previous project.

Similarly, do NOT show Next project if the current project is the final case study.

The navigation should feel like a natural continuation of the case study rather than a separate unrelated section.

==================================================
3. NEXT PROJECT CARD
==================================================

At the very bottom, after the case-study content, show a clean project navigation card.

Example:

NEXT PROJECT

Mobile Point-of-Sale System

Retail · POS

"View project →"

The entire card can be clickable.

Use subtle interaction:

- gentle hover movement
- subtle arrow movement
- smooth transition
- clean border
- rounded corners where consistent with the existing design

Do NOT make it overly animated.

==================================================
4. PREVIOUS PROJECT
==================================================

If a previous project exists, provide:

"← Previous project"

with the previous project's name.

Example:

PREVIOUS PROJECT

Armada Cash

For the current project, determine the correct previous and next project from this exact order:

01 — Armada Cash — Petty Cash Management App
02 — Mobile Point-of-Sale System
03 — Aasara — Funeral Service Coordination Platform
04 — AstenMeds 2.0 — Enterprise Medical ERP Platform
05 — Abraaj

Therefore:

Armada Cash:
→ Next: Mobile Point-of-Sale System

Mobile POS:
← Previous: Armada Cash
→ Next: Aasara

Aasara:
← Previous: Mobile Point-of-Sale System
→ Next: AstenMeds 2.0

AstenMeds:
← Previous: Aasara
→ Next: Abraaj

Abraaj:
← Previous: AstenMeds 2.0
→ No next project

==================================================
5. IMPORTANT — IT MUST APPEAR ONLY AT THE END
==================================================

Do NOT position the navigation using:

- position: fixed
- permanent sticky footer
- viewport-fixed bottom navigation
- floating navigation
- always-visible overlay

The navigation should belong to the document flow and appear after the final case-study section.

The user must physically scroll through the case study and reach the bottom before seeing it.

There should be no "Next project" navigation visible while the user is midway through the case study.

==================================================
6. MAKE THE END FEEL INTENTIONAL
==================================================

After the final case-study content, provide a reasonable amount of spacing.

Then show the previous/next project navigation.

The bottom navigation should feel like:

[Final case-study content]

        ↓

small breathing space

        ↓

PREVIOUS PROJECT              NEXT PROJECT

Project name                  Project name
← View project                View project →

        ↓

Footer / existing final navigation

Do NOT create a huge empty gap.

Do NOT push the navigation unnecessarily far below the content.

==================================================
7. NAVIGATION BEHAVIOR
==================================================

Clicking:

"Previous project"
→ navigate to the previous case-study page.

Clicking:

"Next project"
→ navigate to the next case-study page.

Use the existing case-study routes.

Do NOT create duplicate routes.

Do NOT open the project in a new tab.

Use normal in-site navigation.

After navigation, the new case-study page should start from the TOP of that project.

Do not preserve the previous page's scroll position.

==================================================
8. MOBILE RESPONSIVE BEHAVIOR
==================================================

This bottom navigation must be fully responsive.

Desktop:

Previous project                 Next project

Mobile:

Previous project
Project name
← View project

Next project
Project name
View project →

Stack the navigation vertically on smaller screens.

Make sure:

- no horizontal overflow
- no text clipping
- no overlapping
- buttons remain fully visible
- project names wrap naturally
- spacing remains clean
- touch targets are comfortable

==================================================
9. BUTTON STYLE
==================================================

Use elegant buttons consistent with the existing portfolio.

Recommended:

Previous:
"← Previous project"

Next:
"Next project →"

Use the existing button language/style from the website.

Do NOT introduce a completely different button style.

The buttons should have subtle hover/focus states.

==================================================
10. FINAL CASE STUDY
==================================================

For the final project:

05 — Abraaj

There is no next project.

Therefore:

Do NOT show an empty Next Project area.

Only show:

"← Previous project"

AstenMeds 2.0

"View project →"

Keep the layout balanced even though there is only one navigation option.

==================================================
11. DO NOT MODIFY THE EXISTING CASE STUDY CONTENT
==================================================

Again, this task is ONLY for the bottom project-to-project navigation.

Do NOT modify:

- case-study content
- headings
- paragraphs
- images
- project information
- existing sections
- design system
- colors
- typography
- animations
- existing header
- existing footer

Only add the bottom project navigation described above.

==================================================
FINAL REQUIREMENT
==================================================

The behavior MUST be:

Normal scrolling:
→ No next-project navigation visible.

User reaches the very bottom:
→ Previous/Next project navigation becomes visible as part of the page.

User clicks Next:
→ Navigate to the next case-study page.

User clicks Previous:
→ Navigate to the previous case-study page.

The navigation must NOT be fixed or sticky.

It should exist ONLY at the END of the case-study page.

Keep the design elegant, minimal, responsive and consistent with the existing portfolio.