import React from 'react'

export default function ContextMenu({ContextMenuPosition, setMenuPosition, setDataList, rowId}) {

  if(!ContextMenuPosition.left) return
  const editMenuFun = () => {
    setDataList((prev) => {
      return prev.map((el) => {
        if(el.id === rowId) {
          return {...el, amount: 20, title: 'New Title', category: 'Medicine'}
        }
        return el
      })
    })
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
    </div>
  )
}