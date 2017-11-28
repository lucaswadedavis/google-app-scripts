function onEdit() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var statusColumnNumber = 1; // The "Status" column to watch
  var lastUpdatedColumn = 'E'; // The "Last Updated" column to update
  var sheetName = 'Tasks';
  if (sheet.getName() !== sheetName) return
  var cell = sheet.getActiveCell();
  if( cell.getColumn() === statusColumnNumber ) {
    var row = cell.getRow();
    var time = new Date();
    time = Utilities.formatDate(time, "GMT-08:00", "MM/dd/yy, hh:mm:ss");
    sheet.getRange(lastUpdatedColumn + row.toString()).setValue(time);
  };
 };
