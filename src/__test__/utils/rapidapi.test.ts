import { getAirports } from '../../utils/rapidapi'

describe('rapid api function', () => {
  it('should return the correct result from rapid api', async () => {
    const keyword = 'dub';
    const expected = [
      {
        isActive:true,
        AirportName:"Al Maktoum International Airport",
        city:"Dubai",
        country:"United Arab Emirates",
        AirportCode:"DWC",
        citycode:"OMDW",
        lat:"24.896356",
        long:"55.161389",
        timzone:"4",
        cityunicode:"U",
        zone:"Asia/Dubai",
        CountryCode:"AE",
        id:"61e07352e2f371d6f4906a9e"
      },
      {
        isActive:true,
        AirportName:"Dubai International Airport",
        city:"Dubai",
        country:"United Arab Emirates",
        AirportCode:"DXB",
        citycode:"OMDB",
        lat:"25.25279999",
        long:"55.36439896",
        timzone:"4",
        cityunicode:"U",
        zone:"Asia/Dubai",
        CountryCode:"AE",
        id:"61e0734be2f371d6f4905bd1"
      },
      {
        isActive:true,
        AirportName:"Dubbo City Regional Airport",
        city:"Dubbo",
        country:"Australia",
        AirportCode:"DBO",
        citycode:"YSDU",
        lat:"-32.21670151",
        long:"148.5749969",
        timzone:"10",
        cityunicode:"O",
        zone:"Australia/Sydney",
        CountryCode:"AU",
        id:"61e0734ee2f371d6f4905f69",
      },
      {
        isActive:true,
        AirportName:"Dublin Airport",
        city:"Dublin",
        country:"Ireland",
        AirportCode:"DUB",
        citycode:"EIDW",
        lat:"53.421299",
        long:"-6.27007",
        timzone:"0",
        cityunicode:"E",
        zone:"Europe/Dublin",
        CountryCode:"IE",
        id:"61e07347e2f371d6f490573e"
      },
      {
        isActive:true,
        AirportName:"Dubrovnik Airport",
        city:"Dubrovnik",
        country:"Croatia",
        AirportCode:"DBV",
        citycode:"LDDU",
        lat:"42.56140137",
        long:"18.26819992",
        timzone:"1",
        cityunicode:"E",
        zone:"Europe/Zagreb",
        CountryCode:"HR",
        id:"61e07347e2f371d6f490590b"
      },
      {
        isActive:true,
        AirportName:"Dubuque Regional Airport",
        city:"Dubuque IA",
        country:"United States",
        AirportCode:"DBQ",
        citycode:"KDBQ",
        lat:"42.40200043",
        long:"-90.70950317",
        timzone:"-6",
        cityunicode:"A",
        zone:"America/Chicago",
        CountryCode:"US",
        id:"61e07350e2f371d6f490630b"
      },
      {
        isActive:true,
        AirportName:"Etihad Travel Mall",
        city:"Dubai",
        country:"United Arab Emirates",
        AirportCode:"XNB",
        citycode:null,
        lat:"25.154721",
        long:"55.226424",
        timzone:"4",
        cityunicode:"N",
        zone:"Asia/Dubai",
        CountryCode:"AE",
        id:"61e07353e2f371d6f4906d4d"
      },
      {
        isActive:true,
        AirportName:"Pardubice Airport",
        city:"Pardubice",
        country:"Czech Republic",
        AirportCode:"PED",
        citycode:"LKPD",
        lat:"50.01340103",
        long:"15.73859978",
        timzone:"1",
        cityunicode:"E",
        zone:"Europe/Prague",
        CountryCode:"CZ",
        id:"61e0734be2f371d6f4905a03"
      },
      {
        isActive:true,
        AirportName:"W H 'Bud' Barron Airport",
        city:"Dublin",
        country:"United States",
        AirportCode:"DBN",
        citycode:"KDBN",
        lat:"32.56439972",
        long:"-82.98529816",
        timzone:"-5",
        cityunicode:"A",
        zone:"America/New_York",
        CountryCode:"US",
        id:"61e07353e2f371d6f4906cf2"
      }
    ]
    const result = await getAirports(keyword);
    expect(result).toEqual(expected);
  })
})