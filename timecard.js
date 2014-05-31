javascript: (function() {

    var async = function(src, callback) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = src;
      script.onload = script.onreadystatechange = function() {
          callback();
        script.onload = null;
        script.onreadystatechange = null;
      };
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(script);
    };

    async('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function() {

        alert('executing');
        var nextDate = function(dateString1) {
            dateArray = dateString1.split('/');
            Month = parseInt(dateArray[0]);
            Day = parseInt(dateArray[1]);
            year = parseInt(dateArray[2]);

            switch (Month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                    if (Day === 31) {
                        Month++;
                        Day = 0;
                    }
                    Day++;
                    DayString = (Day < 10) ? '0' + Day : Day;
                    newDate = '0' + Month + '/' + DayString + '/' + year;
                    break;

                case 4:
                case 6:
                    if (Day === 30) {
                        Month++;
                        Day = 0;
                    }
                    Day++;
                    DayString = (Day < 10) ? '0' + Day : Day;
                    newDate = '0' + Month + '/' + DayString + '/' + year;
                    break;

                case 2:
                    if (Day === 28) {
                        Month++;
                        Day = 0;
                    }
                    Day++;
                    DayString = (Day < 10) ? '0' + Day : Day;
                    newDate = '0' + Month + '/' + DayString + '/' + year;
                    break;

                case 9:
                case 11:
                    if (Day === 30) {
                        Month++;
                        Day = 0;
                    }
                    Day++;
                    DayString = (Day < 10) ? '0' + Day : Day;
                    newDate = '1' + Month + '/' + DayString + '/' + year;
                    break;

                case 10:
                case 12:
                    if (Day === 31) {
                        Month++;
                        Day = 0;
                    }
                    Day++;
                    DayString = (Day < 10) ? '0' + Day : Day;
                    newDate = '0' + Month + '/' + DayString + '/' + year;
                    break;
            }
        };

        var enterDay = function(index) {
            $('#TimeEntriesRepeater\\.' + index + '\\.FRMEntryDate').val(newDate);
            $('#TimeEntriesRepeater\\.' + index + '\\.FRMStartTime').val('09:30AM');
            $('#TimeEntriesRepeater\\.' + index + '\\.FRMEndTime').val('12:00PM');
            $('#TimeEntriesRepeater\\.' + index + '').find('td:first').find('a:first').click();
            index++;
            $('#TimeEntriesRepeater\\.' + index + '').find('td:first').find('a:first').click();
            index++;
            $('#TimeEntriesRepeater\\.' + index + '\\.FRMStartTime').val('12:30PM');
            $('#TimeEntriesRepeater\\.' + index + '\\.FRMEndTime').val('06:00PM');
            dateString = $('#TimeEntriesRepeater\\.' + index + '\\.FRMEntryDate').val();
            nextDate(dateString);
            $('#TimeEntriesRepeater\\.' + index + '').find('td:first').find('a:first').click();
            index++;
            if (index !== 39) {
                $('#TimeEntriesRepeater\\.' + index + '').find('td:first').find('a:first').click();
            }
            return ++index;
        };


        $ = jQuery;
        $('#AddNewEntry').click();

        $('#TimeEntriesRepeater\\.0\\.FRMStartTime').val('09:30AM');
        $('#TimeEntriesRepeater\\.0\\.FRMEndTime').val('12:00PM');
        $('#TimeEntriesRepeater\\.0').find('td:first').find('a:first').click();
        $('#TimeEntriesRepeater\\.1').find('td:first').find('a:first').click();
        $('#TimeEntriesRepeater\\.2\\.FRMStartTime').val('12:30PM');
        $('#TimeEntriesRepeater\\.2\\.FRMEndTime').val('06:00PM');
        dateString = $('#TimeEntriesRepeater\\.2\\.FRMEntryDate').val();
        nextDate(dateString);
        $('#TimeEntriesRepeater\\.2').find('td:first').find('a:first').click();
        $('#TimeEntriesRepeater\\.3').find('td:first').find('a:first').click();

        index = 4;

        while (index < 40) {
            index = enterDay(index);
            if (index === 20) {
                nextDate(newDate);
                nextDate(newDate);

            }
        }

        $('#bttSave').click();
    });
})();
