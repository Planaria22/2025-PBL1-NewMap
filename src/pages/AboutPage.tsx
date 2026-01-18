import Title from "../components/elements/title";

const AboutPage = () =>{
  return(
    <div className="flex flex-col w-screen items-center justify-center">
      <Title>このサイトについて</Title>
      <div className="text-black text-center text-2xl m-8">
        このサイトは大阪公立大学高専3年生の授業
        PBL1で作成されたサイトです。<br/>
        足が不自由な方、本校に慣れていない方などが
        快適に移動できることを目指して作られました。
      </div>
    </div>
  )
} 
export default AboutPage