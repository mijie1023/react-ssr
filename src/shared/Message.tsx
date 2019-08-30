import * as React from "react";

export interface MessageProps {message: string}

const Message: React.FunctionComponent<MessageProps> = (props: MessageProps) => <h2>Welcome to React in the {props.message}!</h2>;

export default Message;