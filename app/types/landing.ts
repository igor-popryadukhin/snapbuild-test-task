/** A single media-backed benefit shown inside a use-case tab. */
export interface UseCaseItem {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly image: string
}

/** A content format and its ordered benefits. */
export interface UseCaseTab {
  readonly id: string
  readonly label: string
  readonly items: readonly UseCaseItem[]
}

/** A role-specific workflow presented in the scenarios section. */
export interface RoleScenario {
  readonly id: string
  readonly role: string
  readonly eyebrow: string
  readonly title: string
  readonly task: string
  readonly process: string
  readonly result: string
  readonly accent: string
}

/** A sequential phase of introducing Snapbuild into a corporate workflow. */
export interface ImplementationStep {
  readonly id: string
  readonly title: string
  readonly participants: string
  readonly duration: string
  readonly description: string
  readonly result: string
}
