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

const SentryCommand = require("../../structures/SentryCommand");
const { stripIndents } = require("common-tags");

module.exports = class DevHelpCommand extends SentryCommand {
  constructor(client) {
    super(client, {
      name: "dev-help",
      group: "dev",
      memberName: "dev-help",
      description: "Get info to help developers fix bugs.",
      aliases: ["shard", "developer-help", "debug"],
      hidden: true,
      throttling: {
        usages: 2,
        duration: 6
      }
    });
  }

  exec(msg) {
    const { shard } = this.client;

    return msg.replyEmbed({
      fields: [
        {
          name: "Shard",
          value: `${shard.id}/${shard.shardCount} (cluster ${Number(process.env.CLUSTER_ID)}/${shard.clusterCount})`
        },
        {
          name: "IDs",
          value: stripIndents`
        Guild: \`${msg.guild ? msg.guild.id : "dm"}\`
        Channel: \`${msg.channel.id}\`
        User: \`${msg.author.id}\`
        Message: \`${msg.id}\`
        `
        },
        {
          name: "Timestamp",
          value: stripIndents`
          Message: \`${msg.createdTimestamp}\`
          Current: \`${new Date().getTime()}\``
        }
      ]
    });
  }
};
