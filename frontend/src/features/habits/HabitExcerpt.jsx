import React from 'react'

const HabitExcerpt = ({habit}) => {
  return (
    <tr>
        <td>{habit.name}</td>
        <td>{habit.amount}</td>
        <td>{habit.createdAt}</td>
        <td>{habit.updatedAt}</td>
    </tr>
  )
}

export default HabitExcerpt