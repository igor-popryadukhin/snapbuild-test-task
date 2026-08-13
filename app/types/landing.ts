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
  readonly image: string
  readonly imageAlt: string
  readonly role: string
  readonly eyebrow: string
  readonly title: string
  readonly task: string
  readonly process: string
  readonly result: string
}

/** An illustrative customer workflow used to explain a possible product outcome. */
export interface CustomerStory {
  readonly id: string
  readonly role: string
  readonly company: string
  readonly title: string
  readonly task: string
  readonly result: string
  readonly deliverables: readonly string[]
}

/** A question and rich-text answer displayed in the FAQ disclosure grid. */
export interface FaqItem { readonly id: string; readonly question: string; readonly answer: string }

/** A dated product milestone displayed on the release timeline. */
export interface RoadmapItem { readonly id: string; readonly title: string; readonly description: string; readonly date: string; readonly reached: boolean }

/** A media-backed explanation of the platform workflow. */
export interface ProcessCard { readonly id: string; readonly title: string; readonly mobileTitle: string; readonly description: string; readonly image: string; readonly mobileImage?: string; readonly tabletImage?: string; readonly width: number; readonly height: number }

/** A security capability with responsive supporting media. */
export interface SecurityFeature { readonly id: string; readonly title: string; readonly description: string; readonly image: string; readonly mobileImage: string }

/** A customer logo used by the repeating marquee. */
export interface LogoItem { readonly id: string; readonly image: string; readonly className: string }

/** One labelled row in the product comparison table. */
export interface ComparisonRow { readonly id: string; readonly label: string; readonly values: readonly string[]; readonly checks?: readonly number[] }

/** A stable in-page or external navigation destination. */
export interface NavigationLink { readonly label: string; readonly href: string }

/** A sequential phase of introducing Snapbuild into a corporate workflow. */
export interface ImplementationStep {
  readonly id: string
  readonly title: string
  readonly participants: string
  readonly duration: string
  readonly description: string
  readonly result: string
}

/** A modelled outcome used to explain how a team can measure Snapbuild adoption. */
export interface EffectMetric {
  readonly id: string
  readonly value: string
  readonly label: string
  readonly context: string
}

/** A modelled before-and-after change in a content-production workflow. */
export interface EffectComparison {
  readonly id: string
  readonly criterion: string
  readonly before: string
  readonly after: string
}
