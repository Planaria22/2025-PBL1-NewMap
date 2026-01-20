import Title from "../components/elements/title"

const NotfoundPage = () => {
  return(
    <div className="flex flex-col w-screen items-center justify-center">
      <Title>404 Not Found</Title>
      <div className="text-black text-center text-2xl m-8">
        ページが存在しません。
      </div>
    </div>
  )
}

export default NotfoundPage;