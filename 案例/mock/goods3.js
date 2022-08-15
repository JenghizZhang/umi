import Mock from 'mockjs';

//使用mockjs

export default {
  //查
  'GET /umi/home': Mock.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),

  //查分页
  //指定页数范围内显示全数据，超过只显示两条
  'GET /umi/list': (req, res) => {
    const { _page = 1, _limit = 3 } = req.query;

    const totalPage = 3; //设定总页数
    const lastPageLimit = 2; //设定尾页条数
    const total = _limit * (totalPage - 1) + lastPageLimit; //计算总条数

    res.send({
      code: 0,
      data: {
        _page,
        _limit,
        total,

        //控制data键，后面数组的条数
        ...Mock.mock({
          [`data|${_page >= totalPage ? lastPageLimit : _limit}`]: [
            {
              'id|+1': 1,
              create_at: '@date("yyyy-MM-dd HH:mm:ss")',
              'type_str|1': [
                '中转费明细',
                '调整单明细',
                '代收到付明细',
                '客户运费明细',
                '导入失败记录',
              ],
              name: function () {
                return [
                  Mock.mock('@datetime("MMdd")'),
                  Mock.mock('@county()'),
                  this.operator,
                ].join('-');
              },
              path: 'http://xxx/shop/quotation/导入失败列表.xlsx',
              operator: '@cname',
              'status|1': ['0', '1', '2', '3'],
            },
          ],
        }),
      },
    });
  },

  //增

  'POST /umi/list': (req, res) => {
    console.log(req.body);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { ...req.body, a: 2 },
            msg: '成功',
          },
          {
            code: 1,
            msg: '失败',
          },
        ],
      }).data,
    );
  },

  //删
  'DELETE /umi/list/:id': (req, res) => {
    console.log(req.params.id);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { task_id: '123' },
            msg: '成功',
          },
          {
            code: 1,
            msg: '失败',
          },
        ],
      }).data,
    );
  },
  //改
  'PATCH /umi/list/:id': (req, res) => {
    console.log(req.body);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { ...req.body },
            msg: '成功',
          },
          {
            code: 1,
            msg: '失败',
          },
        ],
      }).data,
    );
  },
};
