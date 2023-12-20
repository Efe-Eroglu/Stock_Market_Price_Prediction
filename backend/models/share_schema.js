const mongoose = require ("mongoose");

const ShareSchema = mongoose.Schema(
    {
        id:{type:String, required:false},
        hisseAd:{type:String, required:false},
        model:{type:String, required:false},
        katman_sayisi:{type:[Number], required:false},
        epochs:{type:[Number], required:false},
        batch_size:{type:[Number], required:false},
        activation:{type:[String], required:false},
        dropout_miktar:{type:[Number], required:false},
        dropout_sayisi:{type:[Number], required:false},
        dogruluk_degeri:{type:[Number], required:false}
    },
    {
        timestamps:true
    }
);

const Share = mongoose.model("Share",ShareSchema);

module.exports = Share;