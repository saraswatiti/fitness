import React, { Fragment } from 'react'

/**
* @author
* @function SectionTitle
**/

const SectionTitle = ({ Stitle, tIcon, Tdescription, darkbg }) => {
    const getTitle = () => {
        var Ttext = Stitle.split(" ");
        var Tlast = Ttext.pop();
        return Ttext.join(" ") + (Ttext.length > 0 ? " <em>" + Tlast + "</em>" : Tlast);

    }

    return (
        <Fragment>
            {darkbg ?
                <div className={`section-heading ${darkbg}`}>
                    <h2 onLoad={getTitle(Stitle)} dangerouslySetInnerHTML={{ __html: getTitle() }} />
                    <img src={require(`../../../../public/assets/images/${tIcon}`)} alt="title icon" />
                    <p>{Tdescription}</p>
                </div> :
                <div className="section-heading">
                    <h2 onLoad={getTitle(Stitle)} dangerouslySetInnerHTML={{ __html: getTitle() }} />
                    <img src={require(`../../../../public/assets/images/${tIcon}`)} alt="title icon" />
                    <p>{Tdescription}</p>
                </div>

            }

        </Fragment>

    )

}

export default SectionTitle