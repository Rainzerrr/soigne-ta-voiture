import Milestone, {
  MilestoneProps,
} from "@/components/molecules/milestone/milestone";
import { FC, Fragment } from "react";
import "./milestones.scss";

interface MilestonesProps {
  milestones: MilestoneProps[];
  currentMilestone: number;
}

const Milestones: FC<MilestonesProps> = ({ milestones, currentMilestone }) => {
  const getMilestoneStatus = (milestone: MilestoneProps) => {
    if (milestone.index < currentMilestone) {
      return "passed";
    } else if (milestone.index == currentMilestone) {
      return "current";
    } else {
      return "next";
    }
  };

  return (
    <div className="milestones">
      {milestones.map((milestone: MilestoneProps, index: number) => (
        <Fragment key={milestone.label}>
          <Milestone
            {...milestone}
            status={getMilestoneStatus(milestone)}
            showSeparator={milestone.index < 4}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Milestones;
