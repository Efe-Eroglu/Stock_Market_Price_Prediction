const mongoose = require ("mongoose");

const ShareSchema = mongoose.Schema(
    {
        id:{type:String, required:true},
        hisseAd:{type:String, required:true},
        model:{type:String, required:true},
        katman_sayisi:{type:[Number], required:true},
        epochs:{type:[Number], required:true},
        batch_size:{type:[Number], required:true},
        activation:{type:[String], required:true},
        dropout_miktar:{type:[Number], required:true},
        dropout_sayisi:{type:[Number], required:true},
        dogruluk_degeri:{type:[Number], required:true}
    },
    {
        timestamps:true
    }
);

const Share = mongoose.model("Share",ShareSchema);

module.exports = Share;



