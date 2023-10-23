import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datve-info',
  templateUrl: './datve-info.component.html',
  styleUrls: ['./datve-info.component.css']
})
export class DatveInfoComponent {
  constructor() {}

  showOnInit() {
    Swal.fire(
      'Bạn đã đặt vé thành công',
      'Chúc bạn có một chuyến đi thật tuyệt vời, rất hân hạnh được phục vụ quý khách',
      'success'
    )
  }
}
