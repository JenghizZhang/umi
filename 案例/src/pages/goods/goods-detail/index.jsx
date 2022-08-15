function GoodsDetail({
  history,
  match: {
    params: { id },
  },
}) {
  return (
    <>
      <div>Page GoodsDetail-{id}</div>
      <button onClick={() => history.push(`/goods/${id}/comment`)}>
        查看评论
      </button>
    </>
  );
}

export default GoodsDetail;
