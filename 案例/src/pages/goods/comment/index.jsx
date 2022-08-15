function GoodsComment({
  history,
  match: {
    params: { id },
    url,
  },
}) {
  return (
    <>
      <div>Page GoodsComment-{id}</div>
      <button onClick={() => history.go(-1)}>回退</button>
      <button onClick={() => history.push(`${url}/3`)}>查看评论列表详情</button>
    </>
  );
}

export default GoodsComment;
