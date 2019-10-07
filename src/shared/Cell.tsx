import * as React from "react";

export interface CellProps {text: string}

const Cell: React.FunctionComponent<CellProps> = (props: CellProps) => <span>{props.text}</span>;

export default Cell;