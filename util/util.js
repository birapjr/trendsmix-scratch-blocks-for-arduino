/**
 * @license
 * TrendsMix Building Blocks for Arduino
 *
 * Copyright 2018 TrendsMix Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Util module
 * @author ubirajara.cortes@trendsmix.com <Ubirajara Cortes>
 */
'use strict';
const xmlParser = require('xml2js').parseString;

/**
 * Parse XML String into Json
 * @param {String} xmlString The XML string
 */
async function parseXmlToJson(xmlString) {
  return new Promise((resolve, reject) => {
    xmlParser(xmlString, function (err, result) {
      if (err)
        reject(err);
      resolve(result);
    });
  });
}

module.exports = {
  parseXmlToJson
};