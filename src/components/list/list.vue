<template>
	<div class="list">
		<ul>
			<li v-for="list in lists">
				<h6>{{list.title}}</h6>
				<p @click=showDetail(list)>{{subString(list.text)}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				lists: [{
						title: 'css的垂直居中方式',
						text: 'Flex布局实现圣杯布局,左右两列固定、中间列自适应的三列式布局 举报原因: 色情 政治 抄袭 广告 招聘 骂人 其他 原文地址: 原因补充: 最多只允许输入30个字..'
					},
					{
						title: '重构：以Java POI 导出EXCEL为例',
						text: '重构 开头先抛出几个问题吧，这几个问题也是《重构：改善既有代码的设计》这本书第2章的问题。 什么是重构？ 为什么要重构？ 什么时候要重构？ 接下来就从这几个问题出发，通过这几个问题来系统的了解重构的意义。'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					},
					{
						title: '【精解】EOS标准货币体系与源码实现分析',
						text: 'EOS智能合约中包含一个exchange合约，它支持用户创建一笔交易，是任何两个基本货币类型之间的交易。这个合约的作用是跨不同币种（都是EOS上的标准货币类型）的，通过各自与EOS主链价值进行锚定，然后再相互发起交易兑换。要搞清楚的是，这与区块链“传统的”交易所并不一样，那个主要是集中在交易撮合上面 ...'
					}
				]
			}
		},
		methods: {
			subString(string) {
				return string.length > 60 ? (string.substring(0, 60) + '...') : string
			},
			showDetail(list) {
				this.showLayer(1);
				this.pageDetail(list);
			},
			...mapMutations({
				showLayer:'showLayer',
				pageDetail:'pageDetail'
			})
		}
	}
</script>

<style lang="less" scoped>
	@color: #5e5140;
	@background: #fcd9ad;
	@width: 1000px;
	.list {
		height: calc(100%);
		overflow: auto;
		ul {
			padding: 10px 0;
			li {
				background: @background;
				margin: 10px;
				padding: 4px 10px;
				color: @color;
				h6 {
					font-size: 16px;
					line-height: 30px;
					font-weight: normal;
				}
				p {
					text-indent: 2em;
					line-height: 20px;
				}
			}
		}
	}
</style>