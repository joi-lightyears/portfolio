import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import TextSpan from '../TextSpan'

function Header() {
    const introText = "Hi!,|I'm |Nguyen Thanh Dat|,|a third-year IT major at the|Ho Chi Minh City University of Transport"
    // const sentence = introText.split("")
    const arr = introText.split("|")
    // console.log(arr)
    const handleTextSpan = (letter, index)=>{
        return(
            <TextSpan key={index}>
                {letter === " "? '\u00A0' : letter}
            </TextSpan>
        )
    }
  return (
    // <div>Header</div>
    <section className='header-container'>
        <div className='intro'>
            {/* intro */}
            <div className="fake-code-typing">
               C:\dat\portfolio&gt;<p>npx create-react-app project</p>
            </div>
            <div className="fake-code">&lt;h1&gt;</div>
            <h1>
                {arr[0].split("").map((letter,index)=>{
                    return handleTextSpan(letter, index)
                })} <br/>
                {arr[1].split("").map((letter,index)=>{
                    return handleTextSpan(letter, index)
                })}
                <span className='myName'>
                    {arr[2].split("").map((letter,index)=>{
                        return handleTextSpan(letter, index)
                    })}
                </span>
                {arr[3].split("").map((letter,index)=>{
                        return handleTextSpan(letter, index)
                    })} <br/>
                {arr[4].split("").map((letter,index)=>{
                        return handleTextSpan(letter, index)
                })} <br/>
                {arr[5].split("").map((letter,index)=>{
                        return handleTextSpan(letter, index)
                })}
                {/* Hi, <br />
                I'm <span>Nguyen Thanh Dat</span>, <br />
                a third-year IT major at the <br />
                Ho Chi Minh City University of Transport */}
                {/* {sentence.map((letter, index)=>{
                    return(
                        <TextSpan key={index}>
                            {letter === " "? '\u00A0' : letter}
                        </TextSpan>
                    )
                })} */}
            </h1>
            <div className="fake-code">&lt;/h1&gt;</div>
            {/* cv button */}
            <a href="Antoanthongtin.pdf" className='cv-btn' download>
                <div className="">
                    <span className="background"></span>
                    <span className="text">Curriculum Vitae</span>
                </div>
            </a>
            {/* scrolldown text */}
            <div className="scrolldown">
                <span>scrolldown</span> <AiOutlineArrowDown/>
            </div>
        </div>
    </section>
  )
}

export default Header