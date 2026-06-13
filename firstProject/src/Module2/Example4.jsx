import React from 'react'

function Example4() {
    let direction="rtl"
    let direction1="ltr"
    let title="royal challengers bengaluru"
    let content="rcb"
    let height="200px"
    let width="200px"
    let imageURL="https://thfvnext.bing.com/th/id/ODF.FYvtJ3zfyxb31GDO3zDiMA?pid=ImgDet&w=32&h=32&dpr=1.5&o=7"
    let images=["https://thfvnext.bing.com/th/id/ODF.FYvtJ3zfyxb31GDO3zDiMA?pid=ImgDet&w=32&h=32&dpr=1.5&o=7","https://tse3.mm.bing.net/th/id/OIP.B8103Jv1dmry6dxnrSqSKAHaHq?cb=thfvnextfalcon&pid=ImgDet&w=181&h=186&c=7&dpr=1.5&o=7&rm=3"]
  return (
    <div>
        <bdo dir={direction}>hello</bdo>
        <abbr title={title}>{content}</abbr>
        {/* 1st way of adding image copying link address */}

        {/* 2nd way of adding image by in assets folder */}

        {/* 3rd way of adding image by imageurl */}
        <img src={imageURL} alt="" height={height} width={width} />
        {/* 4th way of adding image in array format */}
        <img src={images[1]} alt=""  height={height} width={width}/>


      
    </div>
  )
}

export default Example4
