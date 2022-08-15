function GoodsCommentDetail({
  match: {
    params: { id, cid },
  },
}) {
  return (
    <>
      <div>
        Page GoodsCommentDetail-{id}-{cid}
      </div>
      <button onClick={() => history.go(-1)}>回退</button>
    </>
  );
}

export default GoodsCommentDetail;
