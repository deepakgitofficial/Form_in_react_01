import React from 'react'

export default function ContextMenu({
    ContextMenuPosition,
    setMenuPosition,
    setDataList, rowId,
    setInputValForContxtMenu,
    expenses,
    setEditRowId }) {

  if (!ContextMenuPosition.left) return
  const editMenuFun = () => {
    const {id, title, category, amount } = expenses.find((el) => el.id === rowId)
    console.log(title, category, amount, 'firstData')
    // setDataList(title, category, amount, 'firstData')
    setEditRowId(id);
    setInputValForContxtMenu({ title, category, amount });

    // setDataList((prev) => {
    //   return prev.map((el) => {
    //     if(el.id === rowId) {
    //       // return ({...el, amount: 20, title: 'New Title', category: 'Medicine'})

    //         setInputValForContxtMenu(el )
    //         // updateTableDataFun(el)
    //     }
    //     return el
    //   })
    // })
    setMenuPosition({})

  }

  const deleteMenuFun = () => {
    console.log('Delete Menu')

    setDataList((prev) => {
      return prev.filter((el) => el.id !== rowId)
    })
    setMenuPosition({})
  }
  return (
    <div className="context-menu" style={ContextMenuPosition}>
      <div onClick={editMenuFun}>Edit</div>
      <div onClick={deleteMenuFun}>Delete</div>
      {/* <button onClick={updateFun}>update re</button> */}
    </div>
  )
}