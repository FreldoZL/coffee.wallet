
var Logger = {
  //"error", "info", "warning", "success"
  log: function(severity, coin, message) {
    Db.query('INSERT INTO logs (ts, severity, coin, message) VALUES(?, ?,?,?)', [new Date(), severity, coin, message]);
  },

  getLogs: function(callback) {
    Db.query('SELECT * FROM logs ORDER BY ts DESC LIMIT 10', [], callback);
  }
}

Logger.log("info", null, "application started");
/*
window.onerror = function(msg, url, line, col, error) {
   var log = msg;
   log += !url ? '' : '\nurl: ' + url;
   log += !line ? '' : '\nline: ' + line;
   log += !col ? '' : '\ncolumn: ' + col;
   log += !error ? '' : '\nerror: ' + error;
   try {
     Logger.log("error", null, "JS ERROR: " + log);
   } catch(err) {
     console.trace();
     console.log(log);
     console.log(err);
   }
   return true;
};
*/