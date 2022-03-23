## Ôn tập mô hình redux cơ bản
- Redux là 1 thư viện của JS giúp chúng ta quản lý State
- Chỉ xử lý trong những tác vụ đồng bộ.
- UI: React giao diện người dùng.
- Ation: An action is a plain JavaScript object { type: ACT_????, payload: null} (lưu ý: payload luôn truyền giá trị vào trong obj)
- Reducer: Function
    - Input: 2 tham số truyền vào state và action.
    - Output: state mới

- UI -> dispatch action -> reducer xử lý dữ liệu -> store -> đổ vào UI ( re-render )

- reducer (initState)
    - Đôi khi trong các project phức tạp cần tách nhỏ nhiều reducer ra
    - Có 1 hàm dc hỗ trợ từ Redux để gom các hàm nhỏ lại thành RootReducer: combineReducers(reducers)
- const store = createSore(reducer)
- index.js -> React -> <Provider store={store}><App /></Provider>

- useSelector(state -> state.????)
- const dispatch = useDispatch()

Action type, Action Creator


## Xử lý form trong React:
- Đặt hàm onChange để lưu trữ value
- Đặt tên name trùng với key trong obj khi sử dụng hook useState
- value = obj hook đã set State.
- Lưu ý khi setForm thì phải copy dữ liệu từ state form
