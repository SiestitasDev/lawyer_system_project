export const DataCards = ({ icon: Icon, data, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {Icon && <Icon className="w-14 h-14 mb-2" />}
      </div>
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <h3 className="font-semibold text-4xl">{data}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  )
}