

const Feedback = ({name, text, icon}) => {
  return (
    <div className="flex flex-col items-center max-w-[270px] md:mr-10 sm:mr-5 mr-0 my-5 feedback_card py-4 px-6">
      <img src={icon} alt="david" className="w-[130px]" />
      <div className="flex flex-col">
        <h4 className="text-text font-bold text-xl my-3">{name}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feedback
