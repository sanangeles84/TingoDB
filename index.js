var Engine = require('tingodb')(),
    assert = require('assert');
/*
//delete old db file
if(fs.existsSync("/home/runner/db/sample_document_collection"))
fs.unlinkSync("/home/runner/db/sample_document_collection")
*/
var db = new Engine.Db('/home/runner/db', {});

//drop table from previous run
db.collection("sample_document_collection").drop(
  function(err, result) {

    var collection = db.collection("sample_document_collection");

    collection.insert([{hello:'world_safe1'}
      , {hello:'world_safe2'}], {w:1}, function(err, result) {
      assert.strictEqual(null, err);
      console.log(result);

      collection.findOne({hello:'world_safe2'}, function(err, item) {
        assert.strictEqual(null, err);
        console.log(item);

        assert.strictEqual(item.hello, 'world_safe2', "item.hello != world_safe2");
      })

    });

  }
)
