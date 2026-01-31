import styles from "./ModificationBlock.module.scss";
import { h } from "../../../../../dom";
import type { Artifact } from "../../../../../type/artifacts/artifactsUnion";
import type { Characteristics } from "../../../../../type/characteristics/characteristicsUnion";

type ModificationBlockProps = {
  pathImg: string;
  artifacts: Artifact[];
};

export default function ModificationBlock(blockProps: ModificationBlockProps) {
  return <div></div>;
}
