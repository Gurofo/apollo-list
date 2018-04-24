import React from "react";
import Card, { CardContent } from "material-ui/Card";

export default (Todo = ({ todo }) => (
  <Card style={{ margin: 4 }}>
    <CardContent>{todo}</CardContent>
  </Card>
));
