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
