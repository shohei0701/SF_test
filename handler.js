const { WebClient } = require('@slack/web-api');

// SlackのBot User OAuth Token
const token = process.env.SLACK_TOKEN;
const web = new WebClient(token);

module.exports.notify = async (event) => {
  try {
    const result = await web.chat.postMessage({
      channel: 'xxx', // SlackチャンネルID
      text: '実行のテストです',
    });

    console.log(result);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notification sent' }),
    };
  } catch (error) {
    // エラーメッセージとスタックトレースをログに出力
    console.error("Error sending message:", error.message);
    console.error("Error stack:", error.stack);

    // Slack APIからの応答がerrorオブジェクトに含まれている場合、それもログに出力
    if (error.data) {
      console.error("Slack API response:", JSON.stringify(error.data));
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send notification',
        details: error.message,
        slackResponse: error.data ? error.data : 'No response data',
      }),
    };
  }
};