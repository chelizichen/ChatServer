package routes

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var clients = make(map[*websocket.Conn]bool) // connected clients
var broadcast = make(chan Message)           // broadcast channel
var upgrader = websocket.Upgrader{}

// Message struct
type Message struct {
	Message string `json:"message"`
}

func handleMessages() {
	for {
		// Grab the next message from the broadcast channel
		msg := <-broadcast
		// Send it out to every client that is currently connected
		for client := range clients {
			err := client.WriteJSON(msg)
			fmt.Println("收到信息 发送给客户端", client.RemoteAddr(), msg)

			if err != nil {
				fmt.Println("Error", err.Error())
				delete(clients, client)
				client.Close()
			}
		}
	}
}

// corsMiddleware 中间件函数用于允许跨域请求
func CorsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 设置跨域请求的头部信息
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")

		// 继续处理请求
		c.Next()
	}
}
