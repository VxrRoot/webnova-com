import { workflowSteps } from "./data/mockData";
import WorkflowItem from "./elements/WorkFlowItem";

const Workflow = () => {
    return (
        <div className="bg-backgroundDark relative">
            {workflowSteps.map((step, idx) => (
                <WorkflowItem
                    key={idx}
                    desc={step.desc}
                    img={step.img}
                    title={step.title}
                    idx={idx}
                />
            ))}
        </div>
    );
};

export default Workflow;
