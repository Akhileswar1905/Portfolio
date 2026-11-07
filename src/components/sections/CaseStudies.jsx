import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Workflow, Server, Gauge, Cpu, Layers3, Terminal,
  Activity, GitBranch, CheckCircle2,
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


      <motion.section
        variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
        className="relative overflow-hidden rounded-2xl border border-cyan-200/15 bg-[#0b1424] px-6 py-7 text-white shadow-lg shadow-slate-950/10 sm:px-8 sm:py-8"
      >
        <div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan-200">The impact</p>
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[0.6rem] tracking-wider text-slate-300">ENGINEERING OUTCOMES</span>
          </div>
          <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight sm:text-3xl">
            From fragmented ML operations to a repeatable, observable workflow.
          </h3>
          <div className="mt-7 grid gap-6 sm:grid-cols-3 sm:gap-5">
            {[
              ["01", "A repeatable model lifecycle", "Training, checkpoint conversion and evaluation coordinated through reusable Dagster jobs."],
              ["02", "Safer use of shared compute", "Slurm cancellation handling, GPU visibility and a human checkpoint gate help teams manage scarce cluster capacity."],
              ["03", "More accessible infrastructure", "A self-service platform gives teams pipeline creation, job visibility and cost context without relying on direct cluster access."],
            ].map(([number, title, detail]) => (
              <div key={number} className="border-t border-white/15 pt-4">
                <p className="font-mono text-xs text-cyan-200/70">{number}</p>
                <h4 className="mt-2 font-medium text-white">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-slate-400">
            Outcomes are described qualitatively; performance and adoption metrics will be added only when verified.
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default function CaseStudies() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-28">
      <span className="section-number">04</span>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="space-y-10"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs text-primary">04 / Behind the build</p>
            <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Case studies</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Deep dives into the systems, decisions and engineering behind complex projects.
            </p>
          </div>
          <span className="hidden font-mono text-xs tracking-widest text-muted-foreground sm:block">SELECTED DEEP DIVE · 01</span>
        </motion.div>

        <motion.article
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
          className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.04]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative isolate flex min-h-[330px] flex-col justify-between overflow-hidden bg-[#0b1424] p-6 text-white sm:p-9 lg:min-h-[430px]">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(14,165,233,.18), transparent 34%), radial-gradient(circle at 85% 80%, rgba(99,102,241,.2), transparent 35%)" }} />
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.22) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-100/[0.07] px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.14em] text-cyan-100">
                  <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />
                  MLOPS · HPC INFRASTRUCTURE
                </div>
                <h3 className="mt-8 font-display text-5xl font-bold tracking-tight sm:text-6xl">ModelWorks<span className="text-cyan-300">.</span></h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300 sm:text-base">
                  A self-service control plane for fine-tuning, checkpoint conversion and LLM evaluation on shared GPU clusters.
                </p>
              </div>

              <div className="mt-10">
                <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-slate-400">The automated lifecycle</p>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {[
                    ["01", "Train"], ["02", "Convert"], ["03", "Evaluate"],
                  ].map(([number, label], index) => (
                    <div key={label} className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2">
                      <div className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.06] px-2 py-3 backdrop-blur-sm sm:px-3">
                        <p className="font-mono text-[0.58rem] text-cyan-200/70">{number}</p>
                        <p className="mt-1 truncate text-xs font-medium sm:text-sm">{label}</p>
                      </div>
                      {index < 2 && <ArrowUpRight className="size-3 shrink-0 text-cyan-200/60" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-7 p-6 sm:p-9">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="rounded-full px-3 py-1 text-[0.65rem]">Featured case study</Badge>
                  <span className="font-mono text-[0.68rem] text-muted-foreground">MAR — AUG 2026</span>
                </div>
                <h3 className="mt-5 max-w-lg font-display text-2xl font-semibold leading-tight sm:text-3xl">
                  Turning a fragile, manual workflow into a reliable ML pipeline.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Built around Dagster and Slurm, ModelWorks connects distributed training with automated
                  model conversion and a standardized evaluation harness — then makes the infrastructure
                  observable and approachable through a web platform.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-5 border-y border-border py-5">
                {[
                  ["MY ROLE", "Full Stack Developer & ML Engineer"],
                  ["TEAM", "4 engineers"],
                  ["DOMAIN", "Internal MLOps"],
                  ["SCOPE", "LLM post-training"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[0.62rem] tracking-[0.13em] text-muted-foreground">{label}</p>
                    <p className="mt-1.5 text-sm font-medium leading-snug">{value}</p>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {["Python", "Dagster", "Slurm", "NeMo", "FastAPI", "vLLM"].map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full font-mono text-[0.63rem] font-normal">{tag}</Badge>
                  ))}
                  <span className="self-center px-1 text-xs text-muted-foreground">+ more</span>
                </div>
                <Button onClick={() => setOpen(true)} className="group/button h-11 w-full justify-between rounded-full px-5">
                  Read the case study
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
          className="grid gap-3 sm:grid-cols-3"
        >
          {[
            [Workflow, "Orchestration-first", "Composable Dagster jobs and sensors"],
            [Server, "Cluster-aware", "Slurm lifecycle and GPU visibility"],
            [Gauge, "Self-service", "Dashboards, ROI and pipeline authoring"],
          ].map(([Icon, title, detail]) => (
            <div key={title} className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/50 px-4 py-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" showCloseButton className="h-[94vh] max-h-[94vh] w-full gap-0 overflow-y-auto rounded-t-2xl border-border bg-background p-0">
          <div className="mx-auto w-full max-w-5xl">
            <div className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur-xl">
              <SheetHeader className="px-5 py-5 pr-14 sm:px-8">
                <p className="font-mono text-xs tracking-[0.15em] text-primary">CASE STUDY / 01</p>
                <SheetTitle className="mt-1 font-display text-2xl font-bold sm:text-3xl">ModelWorks</SheetTitle>
                <SheetDescription className="max-w-2xl">
                  Automating LLM fine-tuning, checkpoint conversion and evaluation on an HPC cluster.
                </SheetDescription>
              </SheetHeader>
            </div>
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
