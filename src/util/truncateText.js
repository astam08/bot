/*
Copyright 2018 Jonah Snider

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * @param {string} string String to truncate
 * @param {number} [number=2048] Number to truncate to
 * @returns {string} Truncated string or original if string was short enough to begin with
 */
module.exports = (string, number = 2048) => (string.length > number ? `${string.substring(0, number - 3)}...` : string);
