import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/kushal_kant24";
  };
  return (
    <>
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component="h1">About Us</Typography>

          <div>
            <div>
              <Avatar
                style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFhYYGRgaHB4aHBoaGhohHB4YGhwaGRgeHhwcIS4lHB4rHxwZJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDU0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcAAQj/xABJEAACAAMEBQkEBwUHAwUAAAABAgADEQQSITEFBkFRcRMiMmGBkaGxwQdC0fAUUmJygpKyI8LS4fEVFiQzQ1Oig5PiNERjc5T/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAKREAAgICAgEEAgEFAQAAAAAAAAECEQMhEjFBBBMiUTJhQhQzcaGxI//aAAwDAQACEQMRAD8AtXaIs16CPZs2K62Tt3848rkemkM2i0g1EV7TKKx34Dht9YbtM/AnbEW/WgrkP6/PXAk2OjpkwxHmtWgiQ6xGMIvsEnRwETLLJqRENFi4scugr6QJSpCxQ6ygDZ/PYe2Kmct1sMtnDd2RbzhUfOUQrVLqOsfPj6QsJbplBNnmbBsxEXFmminUfX584HZT0izss4A0OIPbnn40747JCh7tF0jAjDOuzHnQsPkQKCoqTubDzoY8kvUUHcKU8BHEDGpwOBz28dxoYzOkcOE+GGPw+c49K0zr8/IhEolhnj0SesYgndXPtj3kxnX5/pEnHZxxA3jz+dsdeHz3/CEtdGR+f6QkvCNHDg4fOXqY8L8PnGGi8IZ/nwgpAHGb5+eMMu0Jd4YaZDKJxIVKmg37IL7Bq6iqC9WbaKmg6sM4pdU7Jfmco2KS8ut9g7M+6DJrR1Ru9N7Ud5NvwjLmlJvjEptL6vS3RriBXAwoTjTZjAPoFaWkYZBuzIesaY1pgX0nowJaPpKdFxR1GxyRRuBpj18YtknjbTiqJwckqkXFpPMFYD9bHH0Wauw3fB5YHkYJrRaLyAJUkVrgdjMp44qYDtbJTfRXY5C74tLpE8UZOaf7Gk6i0Adwbo9hqsdHqcWZ7NGm2qK212iFT7RFbOmY1jzYptnoN0NzpkJs75nfEW0zNkOymwAi0o1EWMtklmw4xwEIvR4r4xNx0CTtkyyy6mLlKAZRXWQUFYkO0ZpPZRLQqbMBiOziOeG2joq2EhT1utUZQ6DRanIYjhtEM6RtAVRShJy6qRW2ie+08AN3WI9CGBySsjLMo6Cqy6UQKKviRD66VlsMGFOPePndANMemFCDtz8jEdjHS9DB+Sf9S14NGW0qcVINdxzI29o8odWaPq1/nGaSp7qcGIx3kRd2TScyhUux3b+EZsnoGlcXZSPqU+0GHKcPn+cIeeBmR3/O2BdrQ59898NRD+m+2VeQJ3tiDN176+UR20hL+sTwB9QIohClpBWCCF5MujbVOQPbTdHI96gFO04RWIpOSk8AYkypbj3e+nrFI44HNyZrWitFoktEDAgDG6cCxxY124+kV+n7G+JWeJctcSF6eAx21bhUCANbQ4HSA4t8I9slqpNlsXUgOtRQnC8AfCsaYvGlSRnlCV22aFo5FkJz5pc9VbviaE9cV+k9YQ1URL1cCcGOO4DmjiWjPNLWx2drruy3moCxoBeNOOETNWFNGY5l6dwHxMUnOo6EUN7C/RANycTWi3AobMKUJIJyJvFq02wNa52ulmKU6VP+LIwg9WwhJL4GrVOJrhedh+r02Rl+vLcxB9/92KKKTVIF3YJXhHkNx0WJl4befeFesZw1MtIbI/GPXQRAtEqmMZoxjZplKSFF6tEjlKdkQ0G2HLrNzVBNd26GlFWCMnQn6c24RKsrOxrQAdsOWTRpGJUk+EWCSD1DiQInOUekhowl2xaWggYenwjjMY7T3wtZP2l7KnyEemUPrV4CnmYzUvovTIr55nvj1BTGlYeuD7XePSPHZbrEKBhmWMUi1YGimtlqoTShB2EVhiTaW6KLVjQDAVqcqDOsNyrK0xwi4nq9I07VfVxJADsAZhGJOyuwfGNc8sYKvJlx4pZHfgGtGaiz53OmG7XHnGp7RBBZ/ZtKC86Y5P2aAeNYNJRpEpDUUESWSUu2aPbjHwZppH2fJd5kwhhleGB40gGtMqZImFHUqy5Ebhu3iN3taQB65aH5QXxgRt6/hHQytS4yFyYYuPKPYL2ZVK1xoccKUx7IfAX6ve3wiHotzcKtmrU2RJM0DNlHEiIZE+TGg1xQ/fGxVHjC1mHeBwAiGbSv1h2Anyjz6am0seCgeZhPbk/A/OK8lgJtcyx4Ejduj1GrsB4mvnEOXOZujLmPw/8AEGJkqyWhuhY5nFr/AKqIZY5Ac4kmXKY4ADs7I9lSwHSjC8XSl7ZUihIJxGMVlneYtoMuYgRhS8pAJAJWmNSMjGgPq/IU9FjTe7elIaUXBonyUkAU1QC1T3AnfuEXeqSVrT6/osXr6Mkj/TTtF79VYc0XZ1E5FVQoqMAABnuELyt19it6C63Dm06qeEY9r9gqcX/djX9JNgeEZFr+OavFz3hTG3yjOumB1I6EXo9iohe1U5GGHSKvlCIcW3EZ4jxiXBrov7ifZNlyVGeMS5cw7MurDyi+TUx1W/OtMmWmBvMTQVyxa6PGFromwJ09II3UgU+TNE5W/wBjxaRSqR/WFo43gd0ENjs2i2dEE2e7OwQcxlW8xoMSgAx64LpOqlkX/TJ4u5/ejPOLKKaM3vjrPfCA5Jp8Kxq8rQ1nXKRL7UB84my5Sr0UVeCgeUKoh9wyBLLNboy3PBSfIRK/u7anUqJLi8KVu0/VSNaZjQwGLPtDs960TcHdbq3EAVWIUVVQcqbYKqLtg5tgZqhZLjz7/TRwlNxBYN4ikaAs5EFXYDiQIB5itZbVabwNGQTlDGtWrtO03ya7cYoJyzZjGZMmULb617AMBFpQ5ytvR0J8Y0ka1I0qhyYHZnAhp7W2c9+XJLKAaVGBoK17DFHq9Pu2iWoaoZwCDkYM9Paqh8bOVQsasDUg8MfCO/F0V/JaBrRtqtKhnq74XSQHYLxIwvQRaMtXLoys15qZ0pUfGKfR+gJyG6xtJp0VQlE6ySGp41gysWiElICo5xxY1YmvWSceMCbsEU0tmfaP0RJmWkpOv3SGIuFQbykYEsDhS93QTytXLAuUp2+9MbyWkKt2jVSc09QWa6SqDbMoRTgQR3mHpE68ivSgZQabqipB4RnzTnppiPGls9SwWVejZpX4lLfqJMSUnquCJLQfZRR5A+kRr3dHjHZGflJ+WCiVpSc5sysrurGaikobpulqEYbIDtLSGuTWLzWKqxBaa5xCz9l6maL3QY26v0VaCp5aUOwzUU+BMCGlr5lPhnLYn/tWg+dY9D0/4olPsc0zKH0q9vlKe4S/iYP56YnjARpNAZ8s77Mh6/c+EHs9MTCyVhK2akeaJT/EL1CvnEmYke6JSk6v2fWBGPyQJPTLHShwI6oyn2gdBPx/uxqelWjMfaEKS0/H+7Gu/kiS6AGOj2kdFCZZJJVwSboIOwU8sPCIJl86m/1EP3aQmatHXs/UYmm/sc0/WVeU0ar/AGJL+KE+ZgY0Zou/RUVa3LzM7FVUVpnx6oK2F/ROGyzkdqA/wQzoDRjGSJ3MKuCtKc7mltuQxHjEHJpFqtgwGuTEYClyYhIrkyuoOO6ojZV2xmWtWhHkyjNLKQzVoAQVahelMqYU7I0WebyfeXzEBu0chT26UvSmIOLr8Yjtp2zD/Xl9jA+UZ5qxZ5ZRaqoOA6Izp/KDOzSJdCA5vc66AAAaA02dUK4/QbLqxW1JoJRrwBoTQjGldoEZ/pvSjy5k6Uhum+xd9oDAMAp2HE4xeaF0mqLa5hxEu49N9UoB2kAdsZ/bJ7G+7mruSzHeSamBxt0wN0MtaL01WYk1NxiSSaPhUk/aoY9m6LeY90Xt11FJYjiMhESz0ZiGrQ50zzjSdDaRQS1pQMcW34mKyfCqK4Y8k7B7Rer62a7Nnc01AVTiQAMK02k0yypBPa9YrOhUO4WuRriewCBvXbTSmiKTXEGmdSNlNvxigsYZ0Cuyy1A6RN96blX1YiBxcvlIs5KPxRos3WNFUOtHl1u36Gqt1g7MR3xMGl1mLUUp1QE/SkkyWRJc95YBvuRQGt0HNaGhIFOuIGrhmCZflq4kGvTBGyuGzPaMIWUXTd6DatKgxtFoDONmeOPNYAshFNtRDtppewwwx47adpila3XEMwKGKkvdO2lcONKxZ2ObyqLMFKOL2wZ47Yz5E+NizkujguzKPCuz+vfDjsgzdB1X1r5wtLhydT90MfIesRSJDlta7Y731Z0lj90T0LeFYE5wmTUZVXFlK43RiZTptP1n84L7YivZnkh0DMVIv5YOrYih2CKvRdglWapNrlIzCjEzaDeeaSKY5RuwSqNEpXZV6aQq8moo30ZAeogY+UaNMWADTrpMdWlOk1JaCWXRqi8LxBNN/GNHaVBSvs6T0ivdI90clJhP2fWJRkR5Kl3Xr1eph4xpk29EbScZv7Q/8tPxfuRpGkYzj2iD9kh+9+5Dr8kcujPo6E1jovQhe2myFYg2vArw8jX1g605ZEVswASR14f1EBOlkAPNxFWoexPhGH02Xn2VnHiarqrKMzR4TaRNTHLnO4HmIhWLQGkVRZYmSkVcgJj5nEmioNuOcTPZ9MrZKfVdh3hW9YGNa7VaBbJq/SJqILjBVmOoCuoFFVSPeDYRTipaYW6CCdqdaZoIm2paHMBXfMUzdxv3QYSJN1EQmt1VWuVboArTZWkZboJJ0jSNnWY7srs4BZ2YMCrD3jgQ1AQcQeIjVzlAlGugp2ZLo+dcVsxdmEYZ81nHpBG9oCJKPNDirLiWYIwqLwNaVDCnAmBxdILZrTPVgrlZzkK2wlyymm3Ax41tLuzlXdmNTRHzyyVYElsCloemWlqzJY6MxkY8JfKNTvun8MDk+fUnHKJ9q0ygDUDFqFRhgCcySc4H2dqYKTXbQ4w8I+WJKS8EqyzaueEENitOCmu7wwPzwgas9ndXFaVK4AGpHHYIspaOuwYkYEj5EDLFPyUwyaYzpMOru1281406kONRxgq1dmSRQ8kCboJMw1N7AiigUWhrnTZFHy4bmnBl2HMfEQi1X7lQaAZ44GuQpC8m2otGhVFuXZoj6WWcLjMtK4qu3LCmWYG09kOW9ayyAKACgHgIBtB22TJerksynfhuJpFvpnWxGVUlZlh3Z5QZRfQyyRr6I6L/AIlJWai8CPwH1iJZdG2lgsqSrMZQKMQqHC810kspz52HVEzQMsvPLnYpx6zBho+S6JOmWYK04FSyMTdmIoa4oPuP0gCMN4xqFgr+JLKqXIERq3b2GKzAN99E/TSHk1JtTdNzTc1oc+RMWtn9pNmIPKS5yOMCt1WxGBANRjxAjj7T7IMOTtH5Jf8AHFo4v2Z3kRHk+ztTjMdK9Ss3ixESl1Hlr0Wlj/pLltxrE+z69WB1qJ12nusjhu66a9lYjnXuwE05Zh1mXMA/RDrH4BzGH1fmKbqlDLYUahKsBVTVRdIJvCuNM4MBb0pjUGm0VxpvHnAzM1usN299JThR6/lu1hNn1ksk11VJ6lmwCkMCTsHOAoTs3xyhQHKwtkzVfFTvzz2bNkeTxRhwMUDJjhn1ZjtiQlsmCl83h1504j1jnFnD9vGEZ/7Ql/w5+dqQezp6uOacRmDmNkAvtCSlnPz7yQn8grozGsdCax0XEDGxl50tHJLHlBLYhSxBYAqxxxwru6JiBrRo/wCjzeTvBuiagU6atsqdqmLzUa0FJc0kkBitBwvfz8IrNdJoeYG+yvg0wfvCPOxzr1DglpF5R/8APk+w09l8ytmmDc4b8yKP3TFjprVJLRO5blpiEqqEIEoQpYg84HfAZqHrHIsocT2ZQ4QLRWbFS4JN3iI0+wW1JyCZKcOjZMKjLA4GhEanFx2LaZQWPUySkxJrTrQ7o99b7rQNUE4BdpArBSITSFCFdsK0ehFzuivAQsNTKPI6BRxgACjpirA87eWzp2Q48zaBSDfT/s+mM7zbO6tfd35NhdIvsWorVoaEkY0gI0lou0o4SZKmochVGod9GAo3YYdKyTtDQtAU1J2QmbpIbKxEM5MsxxhsWUMajKH9uN2wKbXRbSpivQNnkGBoQTlTeK7IjW1Zi4VLKPDsiKtlIdErS8wUcSQK+METkXnQ5qxUg54GEn8Ka2i8H7ia6Bm+7EkA1i20XY2qCc/KJayxXKsWMmXiMKROea1SRTHgp22EWhLOEWu0wXarNzpp3BP34E5L0Xri70LpLkZJYpeLuxHOpzUouOZ6V7ZE8L+Vlc6qFAX7UtECVaVnKKLPUsaDATEoH7wVPG9AQxjVtYdLyraj2KaglT6X5DFqqzgc0XqClQbpG5urDJpqFSVYEEEqynMEGhB6waiN8WmeZJUxAMel98eCENDijgaPL9CDkd4ONdmO+Go6sAFmlas69KwWVaSEbITvdP3x7p+1lwg6KAgEGoOIIyI3iPnysG+o2t4k3bPPNJRPMmH3CTk32Cdvu8Mg0UjLwzQ5kojEZj5pAjr+9bMeOXakHbpWBrXHQ5nWZ1Uc8C8vWRjTtpTuibjuyl6MXjo7H6p7jHkUJhimmJctFQy3lHC9eUgMwAUEAkkYDHOpiu01OV1vK6uLvu1wo64EMARnuhUkWgdC1S3+zy9a/gnUB7oYk3KctPUUcELKlgJfpQXjdFFSu0CpINN8SWGKlyXZRzbVMshq+Qov8pWpQBZZpfABxJOWIxgu9l0ubLa0yX6CsrDcHybhUXfymKxNMsUluJrlWS6FoalgAHBI5oao7RQjOCLVPTklEZSr33cjChDEBQAPqjHbtvGJ83yal0XlGCinEMrse0gY03rNNsksTZ8qW4dwiiVMbMq7EksuIouGEV0n2oWUgXpU4NtACEA9RLCvcIpKFOiMZWHMeQDP7UbNskzz2IP34Zf2qWfZZ5x4sg9TCcH4GckjQVMNWs/s3+4/6TGczfaunu2VvxTB6KYiz/aq7KVWyoKgjGYxzFNiiO4SsHJAJK0eb9Nm+JdtnLLF0YtsGwdZ+EIm2wgC7nTM79tIqphJJJxO+LKLe2RbS6PRPa+HrVgQRxBqIP8AW3RRqttkgskxQ7BcaAgMG6152J2YRngjQ9UdL35KKCpm2YMAre9JYg1H3cjuopgZFqxsUqdFLZJ9YuZMyqx5rFoHkwJ8hCENS6LiqNtK/YO7Zwym6v6OacgYYVzrv6oxTj9Ho45X2P2A1AXbBNouSHszJzb8osxxF64WLjDO6akcRFYujRKNVOPrEPR4ebpC+lQFQh9xVwVCnixB/B1QcWnR2ZXEHvaBK6E0DIr3G8PMCBFnricziTtqc+2Ng120BfsbuoqZcsseKMWwjHI24lUaZ5uTuz2sIJhUJcYxRom0JrHR0Icxxx7WPaw2DCkWpoMTuGfdAONI9nWtVCtjntgcJLnYdksnd9X8u6NDmpHz39Hf6jj8DfCDLRXtDtMuiz0ExQALxW64oMycm7RXrhXTKRfhmgf2VK/2k/KI6KT+/S/7J/MnxjoW0Uoy2ayg4ymG8Fmpw5y18Y9m21ZjtMm3jsVFwAX3Vve6qjcKnqzichne7bk//RMX9QEIn6MtJUz2IZbwlmYWEwXqArzudhiOBIyrD2vJKm+i/wBWLQ89rkxAslqKhAVER681Vri97KgLNW7BhI0askl3uhEvFqUypgAN4AHjAnqroVWmpNmz5jOhDIFJABBqOcakitMBSNCnWBGUvecXhiq0BvA51GTUJxOeEZpcJZF9eS/GcYAv7RrVKmWRRLmK92aj0VgSAyuuNDhnkdtYFtD6Bs02zrMa1LLmksCrsgAoxC1UkNiADntgj121S5GzzrQs0kAp+zVAoYF1UF7po7C+TeIzgL1fskh5gNomKksBrwLEMT7oFBUZ+Eas0YL8Holibv5LZPl6vSyWDW2ypdIAJdTeB2i6fOIKaKklmVrTKUKTzy9QwBpVQl4454iLyTI0WvKFwGxW4OVmio96t0Hx3QxZv7KE+aZl7kCtJaoZrMrc3GrDH3jj1ROLVHTVMprRYbMrEcuHH1lLU7il6Izoik3DUbGxx7wCO6LnTNq0Yzp9HWYiBaMDLVmLVNDznAyoPSB8NX4RSkTt2xZhmakKcx2YhgDBWHLJaXlusxDRlNQfAjrBFQRtBhQFRWGikccbToC1GZZ5T1xKCp66eFc+2LSzoFBuqF20GXEfCBv2VTw8oy2FQGZe0Udf+LEfhg8NiAJAGzPbwyyjFLG02bIZKpg/bnAqYnaAsQQLhzn/AGjHeSARXgKCKbScy5eX3qlRxxFfXgDBtZiAq0pSg7qCBijcmVzS+KSIzIHR0OThl7GBHqY+cJsoozIc0YoeKkqfER9ISzRmG4xhOu9l5K3WhQKAvfHBwGPiTGqJimUVY8eOjwxQkJhDmFNCIBzFSlvMq/WIHeaRsurmlbJZ5CXUSi0DmWwDthSrq1HOOd0kVG7CMXvFSCMCDUcRiIOdHiU1VYc4BSGUgXrygkhTgaE5CkZfUqVJplsTW0zRbVpaTaRdkzJYY40aiMO1ogvoO0AYXW4Op/eihswkysWdkrheeW6Cud2tKEncIV/aMjECcuOeL47q4Yx4uWORybSZrjVdln/Ylp+oven8UdFZ9Ok/7q97fCPYnxzfX+hrX2Z7SzU/9wP+2fhFrpCy3EDSr5k3QReZW62Ju4CpNchTsiKjz26NjT8NlJ/UDFpZg7y3lOlxrpW6FC0rWnNHRwp3R9LLoxRdCdDaWVGU1jWNCWiU8oMXGJ+sOqm3OsfOYMa3qnOBs8sZG6D6E9474zzxKD5Fo5XNcWEOvdqR7DaEDITdBAv1PMdWyC9W+M01X0jYZaMtps4mOXqrEMaJdUAZ0zvHEbYL9YB+wnDfLfvCkjygK1Z1gl2ZXR5CzC7Bgxu1FBSnOU4bYaEnJMSUaaCE6w6JBU/QQbtcLiENX6wZhXqiTN100VdoujKDPBZK5dYqYhnW0MLsuxEk/Vz/AOKGKrTmmTN5MPYiglhggYtQ1u3q3k5xwB7YeLZ0kqL9vaUqgrZrBLQEHcc67FWM3U0pF3L0rMUEJJloCCMa/wAQ8ooVMUjZGVD16ESsyIbv0hStzocUcTAkb8R6worCWG3dCiY4AX+zm23J7pvUOPvSjVgOKM/5Y2iYxN0jIx88av23krTJmHJXAY7Lj8x6/hZo3mxmsoA4leb+QlfSJTWy0NoF9bLOUmFjkUJB2A4hjTaaBfzGCfVe1crYpDg1/ZqrHbfli43/ACUxV602QvZnKgh0UsN7AA3h3V7oh+y63BrNMlE4ynJA+w9WH/IP3xKKqTLyfKK/QTs4v55gRlPtcsdy0y5myZLp2o2PgyxrVpQUBzoaesAvtast6yy5m2XMAJ+y6lfO5FY9kJdGRx4Y6PIpZESYRCiYTHM4Q8H+qJdUkAMQr31oMwVV5l4Vr9mAFoOdXiyzrCuxmoO2Wqv+uJ5FaHiJXWJ3NHAbGvOCU/RWEHTIY0KIMaCiS8j13NkUUwUcjcSO40j0qQwifFB5Mv8A6aOrul/wR5FXdO49xjo7ihuRXTxMZlVpocsQKB2elTQVOI7iYlWBmSiqaA3s8rwBZcsaMBSPOXlpUy1QzKUDAG4lPq38Wf7ZwGwbYjCZdIK7N9SK4/PZGhbEeiFaV5xYYAkmm6uNIPdTp9bKKYtKdh+E86n3TePaIBZrRd6naWMmddOKPmOsA+nkITLG4hxupBzphw8l6bUbxUwEas261SzMFmUNfCXwQDleu0qRvaCrSE1aEAMuBpUYUOyowIgZ1StwlTSxBPR5qgksVOQA4xmxukzRLtBH9L0wmUu5ey5smpHVeYmKPWGdpBFRrTzVqQv+XWrCp6GOIXbug20bbLVNtBmvZ2VcbgvLUCmHNrURZ6b0AttRJc1ZiKrX7ytLDVulQKGuGJ2QVkipbFlFtGKNpFz77d5iLUcI15PZfZBm848XT0SMw05o02e0TJFQ1xiK71NGU8aEV640QyRk6iQlFrsgkHjCFMe3TujxooKP8pHiNhTdDSmPUbHjHAHjjhG76qW7lLMk3MsoLD7VKOOxg0YOTGn+zXSA+iuhOMtzQfZcBwfzXoTJ0Ug90HxmjK8BXLrgR1OkfRtJWmQKXHl8om66ri6Pw33X8MWhtRJBiJImf4hHA5yK4r9l6VHeFPZEOWy9aC602lVBx+chAtrxcmWGepNXu31A2FCHHlEqfaWIww4eMQbUqBGvmpIwX4w3IXiYrWPIXPlXXZT7jFfykj0huLmcSY8pHR4THMByqWIUYkmgHWcBGnWeSJRW0tS7ZpbBBvnMbqVGwUp+U7oCtV7AZk0vTmyhfP3skHfj+ExoNt0U7STICE8zlK3gF5ZyoUFjgQqE9tYhlntIpFaZnsuUzNgKmFzEINCKEHI5wW2DUu0ob4uKwBH+YprUU7M616olydRJ/OZ7jM1aHlCcScSebnC8tgoD6dcdBn/cmd9j8x/gjoPINGWq8SFkOaUU9uHnnD6WjDdwj3lTGtIyyyNaoizbMdppwx+ER7pU1BxGII2RKnzMcYizGrlAZSLbJP0+a5VGdiCQKVoMd9M4LPZ3MVLUwcAjk2pXeHT0rASGoQdoI8DF7oV6T6jc3iRGfNqLr6NON29myPppFFBQcIgz9YE+t3QCzbYx2ww88DM07Y8xcmatILrVrIR0PGMz1ktBmWmY7UvEip2EhVFfKLSbbEAxZe8RSaRdGe8prUY8RhG300HFtsz5pJrRDundXhCXELuwl42mY8WOMJrCjHHDoME2o08ie6VPPWvah+DGBaWYuNVbYJdrkuVLi/dKj3r4KAU24kQslaGi6dmsSJTvgik9eztJwhSWRkJLFWIoCFNaVqcT2eEWCCe4xUS1+qSBh91a+MPWCzIHuklrwIOyrCjLQbML0Z+Jp5FZMJpkT2GI8+xOULEUEGMySoWijKKnSRZVIVSx2CkHiKnsw3WWVdtL7mo47RQ+IMVIMEGtstr4ZlK5riMd49YHovB3EjNVI6PDHpEWWrtgE6eqsKovPf7i0w/ESq/ijpNLYgd6qWLkbOgIoz/tG384cxTwWmG9jFs+kmlzAgUMDSorQivfvOyK21aSpUAVYnPZXbhCLLOLTHmvhzWYDgtFHfSPO3OTkykVsKJWmZNKmXMFTsNR4MPKLB9KSMqTAeu98DALI0kboAUYbz8IntpXEsABhUhssKVpjGyGONbA3vQT/T5X2u5/4Y6B/wDvEPqJ+UfGOhvah9gsyNXpmY8a0nYO0wzMGMeCKp6EcVZ4STmYXTCHLPY3fojDfs749mSrpu1BptGUK5K6H4tDIWJQmMovKSDTMQzMl0yJPzsiTZ0U3QxAXaTWg7oWTQ0URGtLnN2PaYZPXBDMschRW9LbcFL1PjD1j0AJnO5t2uV4wjzQirekH25SdLYMUhawaJqun+2p/wCow9Ih6b0Bycu+qBQCL3PLYE3RQEbyISPqsUpKKfYZYJxVsGgK8Y8hRTrjq741kRpo9Bj1xCRCnHqnGHZE4o6uM0YMOKkEeUMwqOONyk6xIQGVwdtK7xlE9tPSGCteCsrKwBG40YflJHbGdauWmXMVJbyTLYhVWYhJBJoAWRtnWpi1tWjXkzVV1wvChzUioyMZ5NxZqjTRoFp0zLWore4Y+OUUtv1qoLqIK9ePz4xVcm71XuibozQOTzONN8BScujqSAXWie01XL4vg1eGNB2YQGrGo64aNxVlUBcVw7xGaWyRcdl7RwOUWxvwSyLyR3EGurFhMuz8pTnzjUfcUlR3m8fywFEVwGZwEappROTuS1pRUVF3XV5njdMLmfxoWKtkFLKC4FSaZ7q7fnqiTbwqJdp0vIY/CGrILt5ttajtxJiLpGbVxj7o7zjEIxKvSI5mgUyETZCX8z7p7qExUMCST2Ra6OlEHE4Y4cVMWROhP0VPrt+X+cdCb3GOgnUAk2VgGG3A9RH8oVZ2RTV1L9QNB2mFFFzJ/CPU/wBYeWyk5qQN1D6w/JUdx2dOtruKCiKMlXLt3xGqaxKIAwAxhsWRyaKjt91WPkIVNeDmn5G3ruMLpVO/1idM0bPYE8jMA60ceYhqTKIUAgg1OBFNu4wH0GK2NaPlJerMe6NwBLHwwgoselpKAIgbsU1MVEuTFvomWqtealADU7ox+o4z7t/o0YlKPROGmVpUpM/LFFpvTLWhSktXuKbz1pjTLblUVp1Rb2ljNaiqFQdQqes9fVFTZ5SItp5tQEamGIzAhMOPFCV1v/g+RykqvQMV6o9IhdP6R12PVPPGmHXCaQ+Uhp1pHM4SY9WPKiPRACbJq5LvWSz5D9morTGtARBFb5HKSylKmmFRkdkBeiNIryMpEahCINmYUY07IJbJphyLrooO9TgevqiLey66L6wyUCKyqBUA5Y4isKZRWKaz6YWl3LFthwF4kVPCkN2zSbe5Q168e4RyaDRJ01LR5bK1K0NPSMQ02hDknMGkbLZ7Mzc6YezdGTa2lWtD3OiDTtGcNH8hZ/iVuhJF+0SU+tMQdl4E+UaDp1y0wD6tAKcS3qYA9XHpapB/+RPE09Y0PTdjIYtjeBxHZshc3aEgRJGR7Ig2tys7AjCmYqOiBE2zCg4084i2yWC5OBy8hCIpIW0vmFF6csuzEFbtLyKKGuOdTSuyPbDNusGOO8ccIQ8rAKcqkgYe9QGtMa80ZxLRBSmOHdSGQjIHJneY6JvJ/NI6GtHA/qxk8W9pz746OgMrEsdUum0abZOjHR0cgMkmBjW7/Kf7pjo6AcjKkh07OPoY6OjL/Mv4ZdWPoCKT3bV9x/WOjojD+4/8oZ/ggYSOOcdHR7CPNYpYJ9TOmY6Ojgo1KwxZbI6Oifkcr7blA3P97jHR0T8lokEdCJ1gzTgPWPI6AuzmEM/oH7sYrpTpv95vMx0dFIk5jOgP/VWf/wC6X+tY1zTPTPGOjoGbwDGULdLt+EV83/MPEeUex0JEaRIm9LtHpFg/oI6OgikOOjo6OCf/2Q=="
                alt="Founder"
              />
              <Typography>Kushal Kant</Typography>
              <Button onClick={visitInstagram} color="primary">
                Visit Instagram
              </Button>
              <span>
                This is a sample wesbite made by @KushalKant. Only with the
                purpose to Learn MERN Stack
              </span>
            </div>
            <div className="aboutSectionContainer2">
              <Typography component="h2">Our Brands</Typography>

              <a href="https://instagram.com/kushal_kant24" target="blank">
                <InstagramIcon className="instagramSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
