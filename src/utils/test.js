list = [
  {
    label: '对象信息',
    children: [
      {
        label: '基本信息',
        params: 'patientInfo',
        children: [
          {
            label: '姓名',
            params: 'patientInfo.name'
          },
          {
            label: '性别',
            params: 'patientInfo.sex'
          },
          {
            label: '地址',
            params: 'patientInfo.address'
          }
        ]
      }
    ]
  }
]

console.log(JSON.stringify(list))