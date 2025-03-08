
export class Whatsapp {
  private phone : string;
  private message : string;
  constructor(phone : string){
    this.phone = phone;
    this.message= '';
  }
  public setMessage(message : string) :void {
    this.message = message;
  }
  private getUrl() : string{
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;;
  }
  public sentToWhatsapp() : void{
    window.open(this.getUrl())
  }
}
