import agent from "../../../agent";

export async function getItemAndComments(id) {
  // const item = await agent.Items.get(id);
  // const comments = await agent.Comments.forItem(id);

  // return [item, comments]

  return Promise.all([
    agent.Items.get(id),
    agent.Comments.forItem(id)
  ])
}
