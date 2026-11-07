import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Workflow, Server, Gauge, Cpu, Layers3, Terminal,
  Activity, GitBranch, CheckCircle2, CircleDot,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription,
} from "@/components/ui/sheet";

const stack = [
  "Python", "Dagster", "FastAPI", "Pydantic", "Slurm", "Paramiko",
  "NVIDIA NeMo", "vLLM", "PostgreSQL", "Node.js", "GitHub Actions", "Azure ML",
];

const architecture = [
  { icon: Workflow, title: "Dagster orchestration", detail: "Jobs, sensors, run history and human approval gates" },
  { icon: Terminal, title: "SSH + Slurm control", detail: "Submit, monitor and cancel cluster jobs reliably" },
  { icon: Cpu, title: "HPC training", detail: "Multi-GPU SFT with NVIDIA NeMo" },
  { icon: Layers3, title: "Checkpoint conversion", detail: "Distributed checkpoint to Hugging Face format" },
  { icon: Activity, title: "Evaluation harness", detail: "100+ internal benchmark tasks" },
];

const decisions = [
  ["Dagster instead of cron", "Retries, typed run config, run history and a UI for human-in-the-loop execution."],
  ["Discover, don't auto-evaluate", "A sensor surfaces new checkpoints, while a person chooses what deserves scarce GPU time."],
  ["Fresh SSH connection per command", "Short-lived connections with retry/backoff avoid stale sessions during long-running jobs."],
  ["Centralized cluster paths", "A base_dir-derived ClusterConfig prevents path drift across experiments and environments."],
  ["Cancel the Slurm job with the run", "scancel callbacks prevent orphaned jobs and wasted GPU allocations when a Dagster run is stopped."],
  ["Keep telemetry independently deployable", "The production coding-assistant telemetry service stays separate from the batch orchestration repo."],
];

function SectionHeading({ eyebrow, children }) {
  return (
    <div className="mb-5">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{children}</h3>
    </div>
  );
}

function CaseStudyDetails() {
  return (
    <div className="space-y-12 px-5 pb-10 sm:px-8">
      <section>
        <SectionHeading eyebrow="01 / Context">From terminal-driven work to an observable pipeline</SectionHeading>
        <p className="leading-relaxed text-muted-foreground">
          Fine-tuning teams were manually connecting to a shared Slurm/GPU cluster, writing sbatch scripts,
          monitoring jobs for hours, converting checkpoints and launching benchmark scripts one by one.
          The workflow was difficult to audit and inaccessible to stakeholders who needed visibility into
          infrastructure usage, cost and model quality.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["Manual operations", "SSH, job scripts and checkpoint handling"],
            ["Fragmented evaluation", "Ad-hoc commands across benchmark suites"],
            ["Limited visibility", "Non-infra teams depended on engineers for updates"],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-xl border border-border bg-card p-4">
              <p className="font-medium">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="02 / Solution">An orchestration-first model lifecycle</SectionHeading>
        <p className="mb-5 leading-relaxed text-muted-foreground">
          Dagster became the shared orchestration backbone. Composable operations handle the lifecycle,
          while a FastAPI-backed web platform makes monitoring and pipeline creation accessible without
          exposing cluster credentials.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {architecture.map(({ icon: Icon, title, detail }, index) => (
            <div key={title} className="relative rounded-xl border border-border bg-card p-4">
              <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
              <p className="font-medium">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
              <span className="absolute right-4 top-4 font-mono text-xs text-muted-foreground">0{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-4 sm:p-5">
          <p className="font-mono text-xs text-primary">END-TO-END JOBS</p>
          <p className="mt-2 font-medium">Training → checkpoint discovery → conversion → evaluation</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            A second job starts from a human-selected checkpoint, supporting re-evaluation and promotion
            of a specific candidate without repeating training.
          </p>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="03 / Orchestration">Automating the operational details</SectionHeading>
        <div className="space-y-4">
          {[
            ["Training and evaluation jobs", "launch_complete_training_convert_evaluate submits training, waits for Slurm completion, resolves the latest checkpoint, converts it to Hugging Face format and runs the evaluation suite. checkpoint_convert_and_evaluate starts from a selected checkpoint."],
            ["Reliable SSH resource", "A Paramiko-based resource opens a fresh connection per command, applies retry/backoff and uses a login shell so cluster module commands resolve consistently."],
            ["Sensors with a human gate", "Checkpoint discovery polls every two minutes and detects experiment configs without code changes. It surfaces checkpoints but does not automatically spend GPU time on evaluation. A separate sensor reports GPU utilization."],
            ["Cancellation safety", "Slurm job IDs are registered with scancel callbacks. Cancelling a Dagster run also terminates the associated cluster job instead of leaving GPU allocations running."],
            ["Environment consistency", "ClusterConfig derives cluster paths from one base_dir setting, reducing configuration drift between experiments and environments."],
          ].map(([title, detail]) => (
            <div key={title} className="border-l-2 border-primary/40 pl-4">
              <h4 className="font-medium">{title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="04 / Evaluation">One entry point for 100+ benchmark tasks</SectionHeading>
        <p className="leading-relaxed text-muted-foreground">
          Instead of rebuilding evaluation tooling, the pipeline invokes a parameterized Slurm script,
          eval_sft_loop.sh, against an internal suite covering code generation, agentic tool use, security,
          multilingual tasks and finance / IT-ops domains. The suite extends the style of established
          evaluation harnesses for organization-specific models and workflows.
        </p>
      </section>

      <section>
        <SectionHeading eyebrow="05 / ModelWorks platform">Self-service tools beyond the ML-infra team</SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [Server, "Cluster visibility", "GPU utilization, running jobs and cluster status without direct SSH access."],
            [Gauge, "ROI and token economics", "Estimate the cost-benefit of fine-tuning and inference deployments."],
            [Workflow, "No-code pipeline API", "Persist a user-defined pipeline specification and submit it to Dagster through a thin client."],
            [GitBranch, "Team activity", "Bring GitHub activity and team announcements into one workspace."],
          ].map(([Icon, title, detail]) => (
            <div key={title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
              <div>
                <p className="font-medium">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="06 / Closing the loop">Production telemetry as future training data</SectionHeading>
        <p className="leading-relaxed text-muted-foreground">
          A companion CodeAssist service fronts an LLM proxy and captures turn-level metrics, logs and
          feedback from a coding-assistant extension. Paginated APIs expose this telemetry so real
          production usage can inform future supervised fine-tuning runs. Keeping this service separate
          allows it to be deployed and scaled independently from batch ML infrastructure.
        </p>
      </section>

      <section>
        <SectionHeading eyebrow="07 / Engineering decisions">Trade-offs that shaped the system</SectionHeading>
        <div className="overflow-hidden rounded-xl border border-border">
          {decisions.map(([title, detail], index) => (
            <div key={title} className={`grid gap-2 p-4 sm:grid-cols-[minmax(10rem,0.7fr)_1.3fr] ${index ? "border-t border-border" : ""}`}>
              <p className="text-sm font-medium">{title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="08 / Lessons learned">What the work reinforced</SectionHeading>
        <ul className="space-y-3">
          {[
            "Long-running infrastructure workflows need resilient connection management; session lifetime is an operational concern, not just an implementation detail.",
            "Cancellation must propagate across orchestration and the underlying scheduler or compute resources can continue consuming budget.",
            "Centralized configuration reduces subtle environment drift as the number of experiments grows.",
            "Automation does not mean removing human judgment. A deliberate approval gate can be the safer design when compute is expensive.",
            "A growing set of parallel product efforts benefits from clear boundaries between the orchestration core and independently deployable services.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <CircleDot className="mt-1 size-5 shrink-0 text-primary" />
          <div>
            <h3 className="font-display text-lg font-semibold">Impact reporting</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Quantitative outcomes such as time-to-first-evaluation, GPU-hours recovered, manual
              interventions avoided and self-service adoption are intentionally not stated here.
              They should be added only after measurement and verification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CaseStudies() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-28">
      <span className="section-number">03</span>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <div>
          <p className="font-mono text-xs text-primary">03 / Deep dives</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Case studies</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A closer look at the problems, architecture and engineering decisions behind selected work.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[#101827] p-6 text-white sm:p-8">
              <div className="absolute -right-16 -top-16 size-64 rounded-full border border-cyan-300/15" />
              <div className="absolute -right-5 -top-5 size-44 rounded-full border border-cyan-300/20" />
              <div className="relative">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-200">
                  <span className="size-2 rounded-full bg-cyan-300" />
                  INTERNAL MLOPS PLATFORM
                </div>
                <h3 className="mt-8 font-display text-4xl font-bold tracking-tight">ModelWorks</h3>
                <p className="mt-2 max-w-xs text-sm text-slate-300">
                  Automating LLM fine-tuning and evaluation on shared GPU infrastructure.
                </p>
              </div>
              <div className="relative mt-10 flex flex-wrap gap-2">
                {["Dagster", "Slurm", "NeMo", "FastAPI"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[0.68rem] text-slate-200">{tag}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-7 p-6 sm:p-8">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="rounded-full">Featured case study</Badge>
                  <span className="font-mono text-xs text-muted-foreground">MAR — AUG 2026</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">From manual HPC workflows to self-service ML operations</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  An orchestration-first platform for training, checkpoint conversion and 100+ benchmark
                  tasks, paired with dashboards for cluster visibility, ROI and no-code pipeline creation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y border-border py-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Role</p>
                  <p className="mt-1 font-medium">Full Stack Developer & ML Engineer</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Team</p>
                  <p className="mt-1 font-medium">4 engineers</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Domain</p>
                  <p className="mt-1 font-medium">Internal MLOps</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="mt-1 font-medium">LLM post-training</p>
                </div>
              </div>

              <Button onClick={() => setOpen(true)} className="w-full justify-between rounded-full">
                Explore case study <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" showCloseButton className="h-[92vh] max-h-[92vh] w-full gap-0 overflow-y-auto rounded-t-2xl border-border bg-background p-0">
          <div className="mx-auto w-full max-w-5xl">
            <SheetHeader className="border-b border-border px-5 py-6 pr-14 sm:px-8">
              <p className="font-mono text-xs text-primary">CASE STUDY / 01</p>
              <SheetTitle className="mt-1 font-display text-2xl font-bold sm:text-3xl">ModelWorks</SheetTitle>
              <SheetDescription className="max-w-2xl">
                Automating LLM fine-tuning, checkpoint conversion and evaluation on an HPC cluster.
              </SheetDescription>
            </SheetHeader>
            <div className="px-5 py-5 sm:px-8">
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full font-mono text-[0.65rem]">{item}</Badge>
                ))}
              </div>
            </div>
            <CaseStudyDetails />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
