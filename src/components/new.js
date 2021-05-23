
class ImageSlider extends Component {
    render(){
    const settings = {
      dot:true,
      infinite:true,
      speed:500,
      slidesToShow:3,
      slidesToScroll:1,
     
    };
      return (
        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="https://humbledollar-cfc8.kxcdn.com/wp-content/uploads/2020/01/small-profile-pic-2.jpeg">
  
                </img>
              </div>
              <ul class="social-icons" >
                <li><a  href="#"> <i className="fa fa-facebook"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-instagram"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-twitter"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-dribble"></i> </a></li>
  
              </ul>
  
              <div className="details">
                <h2>John Doe <span class="job-title">UI developer</span></h2>
              </div>
            </div>
          </div>
  
  
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="https://th.bing.com/th/id/OIP.pD7UszUpORcqj9ck5jNWngAAAA?pid=Api&rs=1">
  
                </img>
              </div>
              <ul class="social-icons" >
                <li><a  href="#"> <i className="fa fa-facebook"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-instagram"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-twitter"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-dribble"></i> </a></li>
  
              </ul>
  
              <div className="details">
                <h2>John Doe <span class="job-title">UI developer</span></h2>
              </div>
            </div>
          </div>
  
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="https://3.bp.blogspot.com/-FJH7bWctyeo/TcjW3EqIolI/AAAAAAAAC1Q/dciHRM-O9Dk/s1600/cute+kids+%252827%2529.jpg">
  
                </img>
              </div>
              <ul class="social-icons" >
                <li><a  href="#"> <i className="fa fa-facebook"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-instagram"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-twitter"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-dribble"></i> </a></li>
  
              </ul>
  
              <div className="details">
                <h2>John Doe <span class="job-title">UI developer</span></h2>
              </div>
            </div>
          </div>
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="https://3.bp.blogspot.com/-FJH7bWctyeo/TcjW3EqIolI/AAAAAAAAC1Q/dciHRM-O9Dk/s1600/cute+kids+%252827%2529.jpg">
  
                </img>
              </div>
              <ul class="social-icons" >
                <li><a  href="#"> <i className="fa fa-facebook"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-instagram"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-twitter"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-dribble"></i> </a></li>
  
              </ul>
  
              <div className="details">
                <h2>John Doe <span class="job-title">UI developer</span></h2>
              </div>
            </div>
          </div>
  
  
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="https://th.bing.com/th/id/OIP.UlQpaVT7gtReY2nJZMoVLwAAAA?pid=Api&w=234&h=234&rs=1">
  
                </img>
              </div>
              <ul class="social-icons" >
                <li><a  href="#"> <i className="fa fa-facebook"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-instagram"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-twitter"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-dribble"></i> </a></li>
  
              </ul>
  
              <div className="details">
                <h2>John Doe <span class="job-title">UI developer</span></h2>
              </div>
            </div>
          </div>
  
  
  
  
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="https://th.bing.com/th/id/OIP.7YfcfJZTFqsK2bCEyOY3AQAAAA?pid=Api&rs=1">
  
                </img>
              </div>
              <ul class="social-icons" >
                <li><a  href="#"> <i className="fa fa-facebook"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-instagram"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-twitter"></i> </a></li>
                <li><a  href="#"> <i className="fa fa-dribble"></i> </a></li>
  
              </ul>
  
              <div className="details">
                <h2>John Doe <span class="job-title">UI developer</span></h2>
              </div>
            </div>
          </div>
  
  
        </Slider>
      );
    }
  }