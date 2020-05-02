export type Status = 'SUCCESS' | 'FAILURE' | 'ABORTED' | 'OTHER'

export type WorkflowReport = {
  service: string
  workflowId: string
  buildNumber?: number
  workflowName: string
  createdAt: Date
  trigger: string
  status: Status
  repository: string
  headSha: string
  branch: string
  startedAt: Date
  completedAt: Date
  workflowDurationSec: number
  sumJobsDurationSec: number
  jobs: JobReport[]
}

export type JobReport = {
  workflowId: string
  buildNumber?: number
  jobId: string
  jobName: string
  status: Status
  startedAt: Date
  completedAt: Date
  jobDurationSec: number
  sumStepsDurationSec: number
  steps: StepReport[]
}

export type StepReport = {
  name: string
  status: Status
  number: number
  startedAt: Date
  completedAt: Date
  stepDurationSec: number
}

export interface Analyzer {
  createWorkflowReport(...args: any[]): WorkflowReport
}

export const diffSec = (start: string | Date, end: string | Date): number => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  return (endDate.getTime() - startDate.getTime()) / 1000
}