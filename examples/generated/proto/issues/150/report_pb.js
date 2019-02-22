/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_issues_150_position_info_pb = require('../../../proto/issues/150/position_info_pb.js');
goog.exportSymbol('proto.issue_150.ReportDto', null, global);
goog.exportSymbol('proto.issue_150.ReportDto.ReportType', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.issue_150.ReportDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.issue_150.ReportDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.issue_150.ReportDto.displayName = 'proto.issue_150.ReportDto';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.issue_150.ReportDto.prototype.toObject = function(opt_includeInstance) {
  return proto.issue_150.ReportDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.issue_150.ReportDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.issue_150.ReportDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    positioninfodto: (f = msg.getPositioninfodto()) && proto_issues_150_position_info_pb.PositionInfoDto.toObject(includeInstance, f),
    poiid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reporttype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.issue_150.ReportDto}
 */
proto.issue_150.ReportDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.issue_150.ReportDto;
  return proto.issue_150.ReportDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.issue_150.ReportDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.issue_150.ReportDto}
 */
proto.issue_150.ReportDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto_issues_150_position_info_pb.PositionInfoDto;
      reader.readMessage(value,proto_issues_150_position_info_pb.PositionInfoDto.deserializeBinaryFromReader);
      msg.setPositioninfodto(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoiid(value);
      break;
    case 4:
      var value = /** @type {!proto.issue_150.ReportDto.ReportType} */ (reader.readEnum());
      msg.setReporttype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.issue_150.ReportDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.issue_150.ReportDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.issue_150.ReportDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.issue_150.ReportDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositioninfodto();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_issues_150_position_info_pb.PositionInfoDto.serializeBinaryToWriter
    );
  }
  f = message.getPoiid();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getReporttype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.issue_150.ReportDto.ReportType = {
  UNKNOWN: 0,
  ACCIDENT: 1
};

/**
 * optional PositionInfoDto positionInfoDto = 2;
 * @return {?proto.issue_150.PositionInfoDto}
 */
proto.issue_150.ReportDto.prototype.getPositioninfodto = function() {
  return /** @type{?proto.issue_150.PositionInfoDto} */ (
    jspb.Message.getWrapperField(this, proto_issues_150_position_info_pb.PositionInfoDto, 2));
};


/** @param {?proto.issue_150.PositionInfoDto|undefined} value */
proto.issue_150.ReportDto.prototype.setPositioninfodto = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.issue_150.ReportDto.prototype.clearPositioninfodto = function() {
  this.setPositioninfodto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.issue_150.ReportDto.prototype.hasPositioninfodto = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 poiId = 3;
 * @return {number}
 */
proto.issue_150.ReportDto.prototype.getPoiid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.issue_150.ReportDto.prototype.setPoiid = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ReportType reportType = 4;
 * @return {!proto.issue_150.ReportDto.ReportType}
 */
proto.issue_150.ReportDto.prototype.getReporttype = function() {
  return /** @type {!proto.issue_150.ReportDto.ReportType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.issue_150.ReportDto.ReportType} value */
proto.issue_150.ReportDto.prototype.setReporttype = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto.issue_150);
