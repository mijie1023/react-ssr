import * as React from "react";

export interface MessageProps {message: string};

export default (props: MessageProps) => <h2>Welcome to React in the {props.message}!</h2>;