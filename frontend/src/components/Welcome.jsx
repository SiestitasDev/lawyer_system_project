import { useOutletContext } from "react-router-dom"

export const Welcome = () => {
  const userData = useOutletContext()

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-130px)] bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido al Sistema</h1>
        <p className="text-2xl text-gray-600">{userData.name}</p>
      </div>
    </div>
  )
}

export default Welcome