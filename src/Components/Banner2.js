import React from 'react'
import "./Styles5.css"

export const Banner2 = () => {
  return (
    <div className='banner'>
    <div className="container">
        <h2>Carousel</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

           
            <div className="carousel-inner">
                <div className="item active">
                    <img src="https://media.istockphoto.com/photos/humayun-tomb-new-delhi-india-picture-id505239248?k=20&m=505239248&s=612x612&w=0&h=-VDBIaBQquH4MEiLgeCwzhndOAGhIBjKseW_trSmWqo="
                        alt="Los Angeles" style=" width:100%; height: 550px !important;"/>
                    <div className="carousel-caption">
                        <h3>Mumbai</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt iusto placeat, rerum similique natus pariatur molestiae, vero aliquam dicta repellendus itaque, fugit ratione. Iste modi totam architecto dolores consequuntur ipsam dolorem, accusantium cum assumenda, molestiae sed perferendis asperiores, sunt sapiente possimus iure quasi nesciunt doloremque fugit dolore reprehenderit? Harum.</p>
                    </div>
                </div>

                <div className="item">
                    <img src="https://static.langimg.com/thumb/msid-77038304,width-680,resizemode-3/rajgir-bihar.jpg"
                        alt="Chicago" style=" width:100%; height: 550px !important;"/>
                    <div className="carousel-caption">
                        <h3>Bihar</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius aperiam nemo incidunt perferendis, similique eum minus quaerat nobis sequi sed iste, nulla omnis necessitatibus magni nostrum placeat deleniti quo quod pariatur velit qui. Pariatur veritatis eaque odit, quos nulla est nihil sapiente laboriosam voluptatem fugit commodi nesciunt sint accusamus.</p>
                    </div>
                </div>

                <div className="item">
                    <img src="https://static.toiimg.com/photo/82375177.cms" alt="New york"
                        style=" width:100%; height: 550px !important;"/>
                    <div className="carousel-caption">
                        <h3>Delhi</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati sit iste ut delectus eaque maxime? Facere quam totam, eveniet, iure ad porro aut optio eligendi ut et inventore? Hic odio repudiandae porro dolorum accusantium earum. Nobis impedit dignissimos provident temporibus omnis eaque ratione quo corporis! Magnam reprehenderit accusamus deleniti.</p>
                    </div>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>



    <div className="row1">
        <div className="column1">
            <div className="card">
                <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/Hotel/T39/T39069/T39069_EXT_ZFFFD1/Cape-Royale-Luxury-Hotel-Exterior.JPG?tr=w-780%2Ch-437%2Cfo-auto"
                    alt="Avatar" style="width:100%;height:200px"/>
            </div>
        </div>
        <div className="column1">
            <div className="card">
                <img src="https://media.istockphoto.com/photos/luxury-resort-picture-id104731717?k=20&m=104731717&s=612x612&w=0&h=40INtJRzhmU1O4Rj24zdY8vj4aGsWpPaEfojaVQ8xBo="
                    alt="Avatar" style="width:100%;height:200px"/>
            </div>
        </div>
        <div className="column1">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAo1TvbZkp3ceKTKtydClAaJE-eXxltxieccsvDzPyu4pwoCTwA3N5ZVC89julmIVCIuU&usqp=CAU"
                    alt="Avatar" style="width:100%;height:200px"/>
            </div>
        </div>
        <div className="column1">
            <div className="card">
                <img src="https://media.istockphoto.com/photos/luxury-resort-picture-id104731717?k=20&m=104731717&s=612x612&w=0&h=40INtJRzhmU1O4Rj24zdY8vj4aGsWpPaEfojaVQ8xBo="
                    alt="Avatar" style="width:100%;height:200px"/>
            </div>
        </div>
    </div>
    </div>
  )
}
